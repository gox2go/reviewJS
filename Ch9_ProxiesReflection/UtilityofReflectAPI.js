'use strict'

// 1. status flags

const o = {}

/**
 * Reflect.defineProperty
 * Reflect.preventExtensions
 * Reflect.setPrototypeOf
 * Reflect.set
 * Reflect.deleteProperty
 * 
 */




try {
   Object.defineProperty(o,"foo",{value:"bar"}) 
   console.log('success')
} catch (error) {
   console.log('failure') 
}

if(Reflect.defineProperty(o,'foo',{value:"bar"})){
    console.log("success")
}else{
    console.log("failure")
}