
    let input = document.querySelector('#result');
    // -------------------------------------------------------------------------Clear----------------------------------------------------
    function Clear() {
        input.value = '';
        if (input.value == 0) {
            input.value = '0';
        }
    }
    // --------------------------------------------------------------------------raqam kiritish-------------------------------------------
    function raqam(x) {
        if (input.value == 0) {
            input.value = '';
            input.value += x;
        } else {
            input.value += x;
        }


    }
    // -------------------------------------------------------------------------hisoblash------------------------------------------
    function hisobla(j) {
        input.value += ' ' + j + ' ';

    }
    // ------------------------------------------------------------------------Back---------------------------------------------
    function orqaga() {
        let man = input.value;
        input.value = man.substring(0, man.length - 1);
        if (input.value == 0) {
            input.value = '0';
        }
    }
    // ---------------------------------------------------------------------Equal---------------------------------------------------------
    function Equal() {
        let sen = input.value;
        if (sen) {
            input.value = eval(sen);
        }

    }
    // -----------------------------------------------------------------------%--------------------------------------------------------
    function percent() {
        input.value = eval(input.value) / 100;
    }
    // --------------------------------------------------------------------PI---------------------------------------------------------------
    function pi() {
        if (input.value == 0) {
            input.value = '';
        }
        input.value += Math.PI.toFixed(2);
    }
    // ------------------------------------------------------------------------E----------------------------------------------------
    function e() {
        if (input.value == 0) {
            input.value = '';
        }
        input.value += Math.E.toFixed(2);
    }


    // ----------------------------------------------------------PI va E ni bitta funksiyaga olish--------------------------------------

    // function conastant(name) {
    //     if(input.value == 0) {
    //         input.value = '';
    //     }
    //     if(name == 'pi'){
    //         input.value += Math.PI.toFixed(2);
    //     }
    //     if(name == 'e') {
    //         input.value += Math.PI.toFixed(2);
    //     }
    // }

    // ----------------------------------------------------------------pow2---------------------------------------------------------------

    function pow2() {
        input.value = Math.pow(eval(input.value), 2);
    }
// -----------------------------------------------------------------------sqrt----------------------------------------------------------
    function sqrt() {
        input.value = Math.sqrt(eval(input.value));
    }
// -----------------------------------------------------------------------pow-1---------------------------------------------------------
    function pow1() {
        input.value = Math.pow(eval(input.value), -1).toFixed(4);
    }
// ----------------------------------------------------------------------log va ln-----------------------------------------------------
    function log(name) {
        if(name == 'lg'){

            input.value = Math.log10(eval(input.value)).toFixed(5);
        }
        if(name == 'ln') {
            input.value = Math.log(eval(input.value)).toFixed(5);
        }
    }
// ----------------------------------------------------------------------sin va cos tg ctg ------------------------------------------------

    function trig(name) {
        if(name == 'sin') {
            input.value = parseFloat(Math.sin(eval(input.value)/180*Math.PI).toFixed(8));
        }
        if(name == 'cos') {
            input.value = parseFloat(Math.cos(eval(input.value)/180*Math.PI).toFixed(8));
        }
        if(name == 'tg') {
            input.value = parseFloat(Math.tan(eval(input.value)/180*Math.PI).toFixed(8));
        }
        if(name == 'ctg') {
            input.value = parseFloat(Math.trunc(eval(input.value)/180*Math.PI).toFixed(8));
        }
    }

    function fact() {
        let n = input.value;
        for (let i = 1; i < n; i++) {
            input.value *= i
        }
    }
    
    function daraja(z) {
        let nem = input.value;
        input.value += ''+z+'';
        // for(let i=1; i<nem; i++){
        // }
    }


        // if (name = '-1') {
        //      input.value = Math.pow(eval(input.value), -1);
        // }
        // if(name = 'xy') {
        //     // input.value += xy; 
        // }

    







        // function raqam(x) {
        //     document.getElementById('result').value +=x;
        // }

        // function Clear() {
        //     document.getElementById('result').value ='';
        // }

        // function orqaga() {
        //     let bn = document.getElementById('result').value;
        //     document.getElementById('result').value = bn.substring(0, bn.length-1);
        // }

        // function hisobla(j) {
        //      document.getElementById('result').value += ''+j+'';
        // }

        function Equal() {
            let bn = document.getElementById('result').value;
            if(bn) {
                document.getElementById('result').value = eval(bn);
            }
        }






























    // let raqam1 = x;
    // let raqam2 = '';

    // function hisobla(j) {
    //     document.getElementById('result').value += saqla1;
    //     if(x == '+'){
    //         let saqlaAll = parseInt(raqam1)+ parseInt(raqam2);
    //     }
    // }




































        // function son(x) {
        //     // document.getElementById('result').value = x;

        //     document.getElementById('result').value +=x;

        //     // var result = document.querySelector('#result');
        //     // result.value +=x;
        // }

        // function Clear() {
        //     document.getElementById('result').value = '';
        // }



        // function larr() {
        //     document.getElementById('result').value = exp.substring(0, exp.length-1);
        // }

        // let amal = '';
        // let son1 = '';
        // let son2 = '';
        // let natija = '';

        // function bajar(j) {

        //     switch(j) {
        //         case '+':
        //             amal = '+';

        //             break;
        //         case '-':
        //             amal = '-'
        //             break;
        //         case '*':
        //             amal ='*'
        //             break;
        //         case '/':
        //            amal = '/'
        //             break;
        //         default:
        //             amal = '%'
        //             break;


        //     }
        //     son1 = document.getElementById('result').value;
        //     document.getElementById('result').value +=j;    
        // }

        // function Equal() {
            // son2 = document.getElementById('result').value;

        //     if(amal == '+'){
        //         // amal = document.getElementById('result').value;
        //         natija = parseInt(son1) + parseInt(son2);

        //     }else if(amal == '-') {

        //         natija = son1 - son2;

        //     }else if(amal == '*') {

        //         natija = son1 * son2;



        //     }else if(amal == '/') {

        //         natija = son1 / son2;

        //     }else if(amal == '%') {

        //         natija = son1 * (son2/100);

        //     }else {

        //        natija = son1- son2;

        //     }
        //     document.getElementById('result').value = natija;
        //     console.log(natija);
        // }

        //     var result = document.querySelector('#result');

        // document.querySelectorAll('button').forEach(function(btn) {
        //     btn.addEventListener('click', function(e) {
        //         var belgi = e.target.innerText;
        //         result.value = belgi;
        //     })
        // })