const size = {
    mobile: '480px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '1200px',
};

export const device = {
    mobile: `(max-width: ${size.mobile})`,
    tablet: `(min-width: ${size.mobile}) and (max-width: ${size.tablet})`,
    laptop: `(min-width: ${size.tablet}) and (max-width: ${size.laptop})`,
    desktop: `(min-width: ${size.laptop}) and (max-width: ${size.desktop})`,
    desktopLarge: `(min-width: ${size.desktop})`,
};