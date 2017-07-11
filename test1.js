function splitt(Score) {
    var sum = 0
    var ScoreFull =[{}]
    for(var i = 0;i<Score.length;i++) {
        ScoreFull[i] = {name:"",chin:"",eng:"",math:"",code:"",ave:0.00,total:0.00}
        /*ScoreFull[i].sname=Score[i][0]
        for(var j = 0; j<Score[i].length-1;j++)
        {
            ScoreFull[i].score = []
            ScoreFull[i].score[j] = Score[i][j+1]
        }*/
        for (var j = 1; j <= 4; j++) {
            sum += parseInt(Score[i][j])
        }
        ScoreFull[i].name=Score[i][0]
        ScoreFull[i].chin=Score[i][1]
        ScoreFull[i].eng=Score[i][2]
        ScoreFull[i].math=Score[i][3]
        ScoreFull[i].code=Score[i][4]
        ScoreFull[i].total = sum
        ScoreFull[i].ave = sum / 4
        sum = 0
    }
    return ScoreFull
}
function ave(ScoreFull) {
    var ave = 0
    for(var i=0;i<ScoreFull.length;i++)
    {
        ave +=parseInt(ScoreFull[i].total)
    }
    ave = ave/ScoreFull.length
    return ave
}
function mid(ScoreFull) {
    var mid = 0
    var score = []
    for(var i = 0;i<ScoreFull.length;i++)
    {
        score[i] = parseInt(ScoreFull[i].total)
    }
    for(var i = 0;i<score.length;i++)
    {
        mid = score[i]
        for(var j = i+1;j<score.length;j++)
        {
            if(mid>score[j])
            {
                mid = score[i]
                score[i] = score[j]
                score[j] = mid
                break
            }
        }
    }
    if(score.length%2==0)
        mid = (score[(score.length/2)-1]+score[(score.length/2)])/2
    else
        mid = score[parseInt(score.length/2)+1]
    return mid
}
function printff(ScoreFull,ave,mid) {
    console.log("成绩单\n")
    console.log("姓名|数学|语文|英语|编程|平均分|总分\n")
    for(var i = 0;i<ScoreFull.length;i++)
    {
        console.log(ScoreFull[i].name+"|"+ScoreFull[i].math+"|"+ScoreFull[i].chin+"|"+ScoreFull[i].eng+"|"+ScoreFull[i].code+"|"+ScoreFull[i].ave+"|"+ScoreFull[i].total)
    }
    console.log("################################\n")
    console.log("全班分数的中位数:"+mid)
    console.log("全班分数的平均数:"+ave)

}

 var stuIfo = [["Coco","90","100","100","100"],["Bobo","90","100","100","100"]]
 var stuIfoFull=splitt(stuIfo)
 var mid=mid(stuIfoFull)
 var ave=ave(stuIfoFull)
 printff(stuIfoFull,ave,mid)
