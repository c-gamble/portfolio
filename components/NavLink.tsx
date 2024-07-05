import styled from '@emotion/styled';
import Link from 'next/link';

export const NavLink = styled(Link)`
    margin-right: 20px;
    color: ${(props: any) => (props.isDarkMode ? '#ffffff' : '#000000')};
    text-decoration: none;
    position: relative;
    transition: color 0.3s ease;

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: -5px;
        left: 0;
        background-color: ${(props: any) =>
            props.isDarkMode ? '#ffffff' : '#000000'};
        transform: scaleX(0);
        transform-origin: bottom right;
        transition: transform 0.3s ease;
    }

    &.active::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
`;
