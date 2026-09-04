/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
   return {
    init : init,
    value : init,
    increment : function(value)
    {
        this.value++;
        return this.value;
    },
    reset : function(value)
    {
        this.value = init;
        return this.value;
    },
    decrement : function(value)
    {
        this.value--;
        return this.value;
    }
   } 
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */