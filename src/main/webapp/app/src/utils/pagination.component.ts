import {Component, Input, Output, EventEmitter} from '@angular/core';
import {OnChanges} from '@angular/core';

@Component({
    selector: 'pagination',
    template: `
    <nav *ngIf="totalPages > 1">
        <ul class="pagination">
            <li [class.disabled]="currentPage == 1">
                <a (click)="previous()" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li [class.active]="currentPage == page" *ngFor="let page of pages" (click)="changePage(page)">
                <a>{{ page }}</a>
            </li>
            <li [class.disabled]="currentPage == pages.length">
                <a (click)="next()" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </nav>  
`
})
export class PaginationComponent implements OnChanges {
    @Input() totalPages = 1;
    @Output('page-changed') pageChanged = new EventEmitter();
    pages: any[];
    currentPage;

    ngOnChanges(){
        this.currentPage = 1;

        this.pages = [];
        for (var i = 1; i <= this.totalPages; i++)
            this.pages.push(i);
    }

    changePage(page){
        this.currentPage = page;
        this.pageChanged.emit(page);
    }

    previous(){
        if (this.currentPage == 1)
            return;

        this.currentPage--;
        this.pageChanged.emit('previous');
    }

    next(){
        if (this.currentPage == this.pages.length)
            return;

        this.currentPage++;
        this.pageChanged.emit('next');
    }
}