import { Component, OnInit } from "@angular/core";

export class Review {
    author: string;
    rating: number;
    date: Date;
    feedback: string;
}

export class Book {
    _id: string;
    title: string;
    author: string;
    price: string;
    publisher: string;
    language: string;
    review:  Review[];
}
