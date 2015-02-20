'use strict';

const INIT = new WeakMap();
const SERVICE = new WeakMap();


/*================================================================
- Define a class
- The class will be registered as a controller
=================================================================*/
class ArchiveController{
    constructor(bookShelfSvc){
        SERVICE.set(this, bookShelfSvc);

        INIT.set(this, () =>{
            SERVICE.get(this).getArchivedBooks().then(books => {
                this.books = books;
            });
        });

        INIT.get(this)();
    }
}

ArchiveController.$inject = ['bookShelfSvc'];

export default ArchiveController;