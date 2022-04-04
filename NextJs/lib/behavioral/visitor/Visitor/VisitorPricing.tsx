import { Chapter } from "../Entity/Chapter";
import { Page } from "../Entity/Page";
import { IVisitor } from "../Interface/IVisitor";

export class VisitorPricing implements IVisitor {
    visitPage(page: Page) {
        return page.price;
    }
    visitChapter(chapter: Chapter) {
        return chapter.price + chapter.pages.reduce((a, c) => { a.price += c.price; return a }).price
    }
}