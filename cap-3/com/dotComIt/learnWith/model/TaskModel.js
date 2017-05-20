/* Borrowed from
https://github.com/Reboog711/LearnWith
*/

angular.module('learnWith').service('TaskModel', [function(){
    var taskModel = {
        tasks: [],
        taskFilter : {
            completed : 0,
            startDate : new Date("03/01/2016")
        }

    }
    return taskModel;

}]);
