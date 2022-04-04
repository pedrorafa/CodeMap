import { Chapter } from "../Entity/Chapter";
import { Page } from "../Entity/Page";

export interface IVisitor {
    visitPage(page: Page): any
    visitChapter(chapter: Chapter): any
}