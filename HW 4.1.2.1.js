/*а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты 
типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с 
помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться 
свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству 
highlighted значение true
*/
"use strict";

function Post(author) {
    this.author = author;
}


function Post_author(text, date) {
    Post.call(this, text);
    this.date = date;
}

Post_author.prototype = Object.create(Post.prototype);
Post_author.prototype.constructor = Post_author;



Post_author.prototype.prepare = function () {
    this.text = text;

    function AttachedPost(highlighted);
    this.highlighted == highlighted == false;

console.log(Post());





