/*
! Algo Javascript Library 1.0
! Creator :- Aditya Prakash
! Date :- 
*/

//Implementation Success Message
(function(){
    console.log("Algo.js initialization successfully!")
})()

const Error = {
    Searching: {
        linear: function(Errorele, ErrorFind){
            if(typeof(ErrorFind) === "undefined"){
                console.warn(`Please provide the parameter in Algo.function(${find})`)
            }
            if(typeof(Errorele) === "string" || typeof(Errorele) === "number"){
                console.error(`Passing of parameter in Algo.function() is not type of 'String' and 'Number'
                    Please use Algo.function(!undefined)
                `)
            }
        },
        binary: function(){},
        jump: function(){},
        exponential: function(){}
    }
}
//Core Algo functionality with Objects
const Algo = {
    index: null,
    value: null,
    isBool: null,
    LinearSearch: function(elem,find){
        Error.Searching.linear(elem,find)
        for(let i=0;i<elem.length;i++){
          if(elem[i]===find){
            this.isBool = true
            this.index = i
            this.value = find
            break
          }else{
            this.isBool = false
            this.index = -1
            this.value = 'Not Found'
          }
        }
        return this
      },
    BinarySearch: function(elem,find){
        this.typeMismatch(elem,find)
        let FirstEnd = 0, LastEnd = elem.length - 1, middle
        this.isBool = false
        this.index = -1
        this.value = 'Not Found'
        while(this.isBool === false && FirstEnd<=LastEnd){
            middle = Math.floor((FirstEnd+LastEnd)/2)
            if(elem[middle] === find){
                this.isBool = true
                this.index = middle
                this.value = find
                break
            }else if(elem[middle] > find){
                LastEnd = middle - 1
            }else{
                FirstEnd = middle + 1
            }
        }
        return this
    },
    JumpSearch: function(elem,find){
        var len = elem.length
        var step = Math.floor(Math.sqrt(len))
        var prev = 0
        while(elem[Math.min(step,len)-1]<find){
            prev=step
            step+=Math.floor(Math.sqrt(len))
            if(prev>=len){
                this.index = -1
                break
            }
        }
        while(elem[prev]<find){
            prev++
            if(prev===Math.min(step,len)){
                this.index = -1
                break
            }
        }
        if(elem[prev]===find){
            this.index = prev
            this.isBool = true
            this.value = find
        }else{
            this.index = -1
            this.isBool = false
            this.value = 'Not Found'
        }
        return this
    },
    ExponentialSearch: function(elem,find){
        function binarySearch(arrayToSearch, valueToSearch, start, end){
            if(start <= end){
              var middle = Math.ceil((end + start)/2)
              var middleValue = arrayToSearch[middle];
              if(middleValue === valueToSearch){
                return middle;
              } else if(valueToSearch < middleValue){
                  end = middle - 1;
              } else{
                  start = middle + 1;
              }
              return binarySearch(arrayToSearch, valueToSearch, start, end);
            }
            return -1;
          }
        var len = elem.length
        if(elem[0]===find){
            this.index = 0;
            this.isBool = true
            this.value = find
        }
        var i=1
        while(i<len && elem[i]<=find){
            i=i*2
        }
        this.index = binarySearch(elem, find, i/2, Math.min(i, len-1))
        if(this.index!=-1){
            this.isBool = true
            this.value = find
        }else{
            this.isBool = false
            this.value = 'Not Found'
        }
        return this
    },
    
}


module.exports = Algo