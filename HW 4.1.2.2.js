/*
а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты 
типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с 
помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться 
свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству 
highlighted значение true
*/
"use strict";

class Post {
    constructor(author) {
        this.author = author;
    }


class Post_author extends Post {
    constructor(text, date) {
        super(text);
        this.date = date;
    }

   

class AttachedPost extends Post {
    constructor(text, date, highlighted) {
        super(text, date);
        this.highlighted = highlighted;
    }

    
console.log(Post(author));