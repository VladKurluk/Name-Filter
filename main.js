$( document ).ready(function() {
    
    /*Строка имен*/
    var strName = "Майкл, Эльдар, Абрам, Дана, Макар, Борис, Радий, Давид, Аваз, Равиль, Августин, Бахрам, Блез, Богдан, Давлат, Дамир, Казбек, Авраам, Камиль, Карен, Адам, Карим, Маджид, Агафон, Макарий, Радик, Агапит, Радомир, Эдгар, Агап, Эдуард, Эмиль";

    /*Преобразую строку имен в масив имен.*/
    var nameList = strName.split(', ');
    //console.log(nameList);//DEBUG


    /*Создаю переменную-пустой масив для хранения массивов имен*/
    var arrNameList = [];
    /*Заполняю масив arrNameList масивами с именами и дроблю побквенно.
     В итоге массив arrNameList содержит массивы-имена*/
    for (var i = 0; i < nameList.length; i++) {
        arrNameList.push(nameList[i].split(""));
    }
    //console.log(arrNameList);//DEBUG


    /*Получаю первые буквы имен и записываю в новый масив firstLetterOfName*/
    var firstLetterOfName = [];
    arrNameList.forEach(function(item, i, arrNameList){
        firstLetterOfName.push(item[0]);
    });
    //console.log(firstLetterOfName.length);//DEBUG
    

    /*Удаляю дубликаты букв с помощью фунции unique, которая принимает массив с первыми буквами имен.
    Функцию взял отсюда https://learn.javascript.ru/task/array-unique */
    function unique(arr) {
       var obj = {};
      
        for (var i = 0; i < arr.length; i++) {
          str = arr[i];
          obj[str] = true; // запомнить строку в виде свойства объекта
        }
    
        return firstLetterOfName = Object.keys(obj); // или собрать ключи перебором для IE8-
    }
    /*Вызываю функцию и удаляю дубликаты*/
    unique(firstLetterOfName);
    //console.log(firstLetterOfName);//DEBUG


    //Конкатенирую все буквы в spanы для дальнейшего вывода звглавных букв имен на страницу
    var spanLetter = '';
    for(var k = 0; k < firstLetterOfName.length; k++) {
        spanLetter += "<span id=" + firstLetterOfName[k] + ">" + firstLetterOfName[k] + "</span> ";
    }


    //Конкатенирую все имена в р для дальнейшего вывода списка имен на страницу
    var listNameForPage = '';
    for(var k = 0; k < nameList.length; k++) {
        listNameForPage += "<p id=" + nameList[k][0] + ">" + nameList[k] + "</p>";
    }
    //console.log(typeof listNameForPage)//DEBUG


    /*Вывод звглавных букв имен на страницу*/
    $('#Name').html(spanLetter).css({'cursor' : 'pointer'});
    $('#Name span').css({'marginRight' : '5px'});


    /*Вывод списка имен на страницу*/
    $('#nameList').html(listNameForPage).css({'cursor' : 'pointer', 'margin-bottom' : '0px'});
    $('#nameList p').css({'margin-bottom' : '5px', 'margin-top' : '5px'});

    /*Получаю значение ID при клике по букве*/
    $("#Name span").click(function() {
        var attrLetter = $(this).attr('id');
        //console.log(typeof attrLetter);//DEBUG

        /*Методом each получаю значения ID в списке имен и провожу сравнение по результату чего добавляю класс*/
        $('#nameList p').each(function(index) {
            var attrName = $(this).attr('id');
            if(attrLetter === attrName) {
                $('this').removeClass('hidden');
                $(this).addClass('invisible');
            } else {
                $(this).addClass('hidden');
                $(this).removeClass('invisible');
            }
        });
    });

});