'use client';

import Project from '@/components/Project';
import { motion } from 'framer-motion';
import { useGlobalStore } from '@/store/root';
import { projects, colors } from '@/data/projects';
import { useState, useEffect } from 'react';

export default function Projects() {
    const { isDarkMode } = useGlobalStore();

    // const allSkills = new Set<string>();
    // projects.forEach((project) => {
    //     project.skills.forEach((skill) => {
    //         allSkills.add(skill);
    //     });
    // });
    // const allSkillsArray = Array.from(allSkills);
    // const colors = getSkillsColors(allSkillsArray);

    const allTags = new Set<string>();
    projects.forEach((project) => {
        project.skills.forEach((skill) => {
            allTags.add(skill);
        });
        // allTags.add(project.status);
    });

    const allTagsArray = Array.from(allTags).sort();

    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [displayedProjects, setDisplayedProjects] = useState(projects);

    useEffect(() => {
        if (selectedTags.length === 0) {
            setDisplayedProjects(projects);
        } else {
            const filteredProjects = projects.filter((project) => {
                return selectedTags.every(
                    (tag) =>
                        project.skills.includes(tag) || project.status === tag,
                );
            });
            setDisplayedProjects(filteredProjects);
        }
    }, [selectedTags]);

    const handleTagClick = (tag: string) => {
        if (selectedTags.includes(tag)) {
            const newTags = selectedTags.filter((t) => t !== tag);
            setSelectedTags(newTags);
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    };

    return (
        <motion.div
            style={{
                background: isDarkMode
                    ? '#1c1c1c'
                    : 'linear-gradient(90deg, #fdfbfb 0%, #ebedee 100%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                color: isDarkMode ? '#FFF5EA' : '#1c1c1c',
                fontSize: '24px',
                minHeight: 'calc(100vh - 115px)',
            }}
        >
            <div style={{ height: '50px' }} />
            <motion.div
                style={{
                    width: '80%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <p
                    style={{
                        fontSize: '18px',
                        fontWeight: 500,
                        textAlign: 'center',
                    }}
                >
                    in my free time, i like to build stuff. usually i just
                    explore whatever interests me so as to keep learning fun.
                    click a tag (or multiple) to filter
                </p>
                <div style={{ height: '20px' }} />
                <motion.div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                    }}
                >
                    {allTagsArray.map((tag) => (
                        <motion.div
                            key={tag}
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '4px',
                                padding: '4px 8px',
                                borderRadius: '8px',
                                fontWeight: 500,
                                fontSize: '12px',
                                background:
                                    selectedTags.includes(tag) && isDarkMode
                                        ? '#FFF5EA'
                                        : selectedTags.includes(tag)
                                        ? '#1c1c1c'
                                        : tag === 'complete'
                                        ? 'rgba(0, 255, 0, 0.3)'
                                        : tag === 'active'
                                        ? 'rgba(255, 0, 0, 0.3)'
                                        : isDarkMode
                                        ? colors?.get(tag as any)
                                              ?.darkBackgroundColor || '#1c1c1c'
                                        : colors?.get(tag as any)
                                              ?.lightBackgroundColor ||
                                          '#FFF5EA',
                                color:
                                    selectedTags.includes(tag) && isDarkMode
                                        ? '#1c1c1c'
                                        : selectedTags.includes(tag)
                                        ? '#FFF5EA'
                                        : tag === 'complete'
                                        ? 'rgba(0, 255, 0, 1)'
                                        : tag === 'active'
                                        ? 'rgba(255, 0, 0, 1)'
                                        : isDarkMode
                                        ? colors?.get(tag as any)
                                              ?.darkTextColor || '#FFF5EA'
                                        : colors?.get(tag as any)
                                              ?.lightTextColor || '#1c1c1c',
                                cursor: 'pointer',
                            }}
                            onClick={() => handleTagClick(tag)}
                        >
                            {tag}
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
            <div style={{ height: '40px' }} />
            {displayedProjects.map((project) => (
                <Project
                    key={project.title}
                    status={project.status}
                    title={project.title}
                    date={project.date}
                    github={project.github}
                    demo={project.demo}
                    visit={project.visit}
                    description={project.description}
                    skills={project.skills}
                    isDarkMode={isDarkMode}
                    colors={colors}
                />
            ))}
            <div style={{ height: '50px' }} />
        </motion.div>
    );
}
