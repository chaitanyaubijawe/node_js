var Person = {

	init : function (name) {
		// body...

		this.name = name;	}
}


var lokesh = Object.create(Person);
//{"name":{value:"lokesh"}}

lokesh.init("lokesh");

console.log(lokesh)
