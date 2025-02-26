class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
	  this.name = name;
	  this.releaseDate = releaseDate;
	  this.pagesCount = pagesCount;
	  this.state = 100;
	  this.type = null;
	}
	
	fix() {this.state *= 1.5;}
  
	set state (number) {
	  if (number < 0) {
		this._state = 0;
	  }
		if (number >100) {
		  this._state = 100;
	} else {
	  this._state = number;
	}
	}
  
	get state () {
	  return this._state;
	}
  }
  
  class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
	  super (name, releaseDate, pagesCount);
	  this.type = "magazine";
	}
  }
  
  class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
	  super (name, releaseDate, pagesCount);
	  this.author = author;
	  this.type = "book"
	}
  }
  
  class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
	  super (author, name, releaseDate, pagesCount);
	  this.type = "novel";
	}
  }
  
  class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
	  super (author, name, releaseDate, pagesCount);
	  this.type = "fantastic";
	}
  }
  
  class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
	  super (author, name, releaseDate, pagesCount);
	  this.type = "detective";
	}
  }
  
  class Library {
	constructor(name) {
	  this.name = name;
	  this.books = [];
	}
	addBook(book) {
	  if (book.state > 30) {
		this.books.push(book);
	  }
	}
	
	findBookBy(type, value) {
	  return this.books.find(book => book[type] == value) || null;
	}
	
	giveBookByName(bookName) {
	  const book = this.findBookBy("name", bookName);
	  if (book) {
		this.books.splice(this.books.indexOf(book),1);
	  }
	  return book;
	}
  }
  
  class Student {
	constructor (name) {
	  this.name = name;
	  this.marks = {};
	}
  
	addMark(mark, subject) {
	  if (mark >= 2 && mark <= 5) {
		if (Object.keys(this.marks).includes(subject)) { 
		  this.marks[subject].push(mark);
		} else {
		  this.marks[subject] = [mark,];
		}
	  }
	}
  
	getAverageBySubject(subject) {
	  if (Object.keys(this.marks).includes(subject)) {
		return this.marks[subject].reduce((sum, mark) => sum + mark, 0) / this.marks[subject].length;
	  }
	  return 0;
	}
  
	getAverage() {
	   return Object.keys(this.marks).reduce((sum, currentSubject) => sum += this.getAverageBySubject(currentSubject), 0) / Object.keys(this.marks).length;
	}
  }
  
  