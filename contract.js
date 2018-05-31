'use strict';

var Diary = function(){
    this.saveTime = "";
    this.textContent = "";

}
var DiaryContract = function () {
    LocalContractStorage.defineMapProperty(this, "diary");
};

DiaryContract.prototype = {
    init: function() {

    },
    getAllDiary: function(){
        var name = Blockchain.transaction.from;
        var allDiary = this.diary.get(name);
        if (!allDiary){
            allDiary = [];
        }
        return allDiary;
    },
    saveDiary: function(saveTime, textContent){
        var name = Blockchain.transaction.from;
        var diary = new Diary();
        diary.saveTime = saveTime;
        diary.textContent = textContent;
        var allDiary = this.diary.get(name);
        if (!allDiary){
            allDiary = [];
        }
        allDiary.push(diary);
        this.diary.set(name, allDiary);
        var ret = this.diary.get(name);
        if (!ret){
            ret = [];
        }
        return ret;
    }
};

module.exports = DiaryContract;