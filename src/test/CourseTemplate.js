export default {
    // Array of all sections in the course
    sections: ["One", 'Two', 'Three', 'Four'],
    // These values must matach the values in pages object
    One: ['Watch', 'Read', 'Interactive'],
    Two: ['Listen', 'Watch', 'Interactive'],
    Three: ['Listen', 'Watch', 'Read', 'Interactive'],
    Four: ['Listen', 'Watch', 'Read'],
    // Value must must match name of the component you want to render in the modal for that section
    pages: {
        Listen: "Listen",
        Watch: "Video",
        Read: "Text",
        Interactive: "Mixed",
    }
}