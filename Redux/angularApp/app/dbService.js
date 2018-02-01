var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var todos = [
            { id: '1', description: 'first', completed: false },
            { id: '2', description: 'second', completed: false },
            { id: '3', description: 'third', completed: false },
            { id: '4', description: 'four', completed: false }
        ];
        var samp = [
            { id: '1', name: 'goose' }
        ];
        return { 'todos': todos, 'samp': samp };
    };
    return InMemoryDataService;
}());
export { InMemoryDataService };
//# sourceMappingURL=dbService.js.map