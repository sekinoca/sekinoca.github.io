export const OPEN_SIDEMENU = 'OPEN_SIDEMENU';
export const CLOSE_SIDEMENU = 'CLOSE_SIDEMENU';

export function openSidemenu() {
    return {
        type: OPEN_SIDEMENU,
        open: true,
    };
}

export function closeSidemenu() {
    return {
        type: CLOSE_SIDEMENU,
        open: false,
    };
}
