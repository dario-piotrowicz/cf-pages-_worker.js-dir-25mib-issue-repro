import { writeFile } from 'node:fs/promises';

const bigNum = 15500;

const loremIpsumParagraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor sem pulvinar, vulputate diam nec, gravida ex. Nam vestibulum aliquet tellus vitae volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam dapibus neque sit amet turpis sagittis facilisis. Nulla luctus mi commodo aliquet suscipit. Praesent nunc nulla, tincidunt ac aliquet in, malesuada non arcu. Cras vehicula dignissim nibh at dapibus. Curabitur non massa facilisis, pellentesque arcu in, facilisis libero. Nam lobortis ipsum sed accumsan finibus. Sed molestie lacinia volutpat. Vestibulum ut iaculis tellus, quis congue dui. Duis ut erat nunc. Suspendisse potenti. Integer varius risus id velit convallis laoreet. Sed dapibus odio vitae lorem auctor pretium. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.';

await writeFile('public/_worker.js/bigNum.ts',
`
const array = [\n${(new Array(bigNum)).fill(null).map(() => `    "${loremIpsumParagraph}",\n`).join('')}];

export const bigNum = array.length;
`
);