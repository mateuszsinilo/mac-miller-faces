import { Global } from '@emotion/react';

export const Fonts = () => (
    <Global
        styles={`
    @font-face {font-family: "Dozer One"; src: url("//db.onlinewebfonts.com/t/98ce42d4fb7d8101b8ea18b615616e88.eot"); src: url("//db.onlinewebfonts.com/t/98ce42d4fb7d8101b8ea18b615616e88.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/98ce42d4fb7d8101b8ea18b615616e88.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/98ce42d4fb7d8101b8ea18b615616e88.woff") format("woff"), url("//db.onlinewebfonts.com/t/98ce42d4fb7d8101b8ea18b615616e88.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/98ce42d4fb7d8101b8ea18b615616e88.svg#Dozer One") format("svg"); }
`}
    />
);
