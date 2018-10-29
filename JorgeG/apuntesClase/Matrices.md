```js
//var matrix = [[[],[]],[[],[]]]


//matrix[0][0][0]


function slimArray (actual, anterior) {
	actual.concat(anterior)
}

matrix //var matrix = [[[],[]],[[],[]]]
	.reduceRight(slimArray) //var matrix = [[],[]]
	.reduce(slimArray) //var matrix = []
	.sort()
	.reverse()
```
