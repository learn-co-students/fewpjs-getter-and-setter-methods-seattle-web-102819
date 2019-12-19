class Circle {
    constructor(radius){
        this.radius = radius
    }

    get diameter() {
        return this.radius * 2;
    }

    get circumference() {
        return 2* this.radius * Math.PI
    }

    get area() {
        return Math.PI * (this.radius * this.radius)
    }

    set diameter(newDiameter) {
        this.radius = newDiameter / 2
    }

    set circumference(newCircumference) {
        this.radius = newCircumference/(Math.PI * 2)
    }
}