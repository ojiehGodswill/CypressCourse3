let books = [
    {
        title: "The Adventures of Tom and Jerru",
        description: "A novel for kids",
        numberOfpages: 224,
        author: "Mark Twain",
        reading: true
    },
    {
        title: "Pride and Lust",
        description: "A romantic novel ",
        numberOfpages: 432,
        author: "Jane Austen",
        reading: false
    },
    {
        title: "Born to kill",
        description: "Aan award winning novel",
        numberOfpages: 281,
        author: "Harper Lee",
        reading: true
    },
    {
        title: "A bird catcher",
        description: "A novel for everyone",
        numberOfpages: 277,
        author: "J.D. Salinger",
        reading: true
    },
    {
        title: "The Great war",
        description: "A classic novel ",
        numberOfpages: 180,
        author: "F. Scott Fitzgerald",
        reading: false
    }
];

for (let i = 0; i < books.length; i++) {
    if (books[i].reading === true) {
        console.log(books[i]);
    }
}
