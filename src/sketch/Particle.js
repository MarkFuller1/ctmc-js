// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/BjoM9oKOAKY
import * as c from "./sketch";

export default class Particle {
  constructor(p) {
    this.pos = p.createVector(p.random(p.width), p.random(p.height));
    this.vel = p.createVector(0, 0);
    this.acc = p.createVector(0, 0);
    this.maxspeed = 4;
    this.h = 255;
    this.prevPos = this.pos.copy();
    this.p = p;
    this.change_color = 5;
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);

    this.pos.add(this.vel);

    if (
      this.pos.x > this.p.windowWidth ||
      this.pos.x < 0 ||
      this.pos.y > this.p.windowHeight ||
      this.pos.y < 0
    ) {
        this.pos.x = (Math.random() * this.p.windowWidth) + 1;
        this.pos.y = (Math.random() * this.p.windowHeight) + 1
    }

    this.acc.mult(0);
  }

  follow(vectors, i) {
    //   console.log("in follow")
    var x = this.p.floor(this.pos.x / c.scl);
    var y = this.p.floor(this.pos.y / c.scl);
    var index = x + y * c.cols;
    var force = vectors[index];
    if (force === undefined || force == null || force == "undefined") {
      force = 0;
    }
    //console.log(force);
    // console.log(x, y, c.cols)
    // console.log(vectors)
    this.applyForce(force, i);
  }

  applyForce(force, i) {
    //   console.log("apply force")
    //this.acc.add(force);
    this.pos.x += force.x;
    this.pos.y += force.y;
  }

  show() {
    this.p.stroke(this.h, this.h, this.h, 1000);
    //console.log(this.h);
    this.h = this.h + this.change_color;
    if (this.h > 255 || this.h < 0) {
      this.change_color *= -1;
    }
    this.p.strokeWeight(1);
    this.p.line(this.pos.x, this.pos.y, this.pos.x + 1, this.pos.y + 1);
    this.updatePrev();
  }

  updatePrev() {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  }

  edges() {
    if (this.pos.x > this.p.width) {
      this.pos.x = 0;
      this.updatePrev();
    }
    if (this.pos.x < 0) {
      this.pos.x = this.p.width;
      this.updatePrev();
    }
    if (this.pos.y > this.p.height) {
      this.pos.y = 0;
      this.updatePrev();
    }
    if (this.pos.y < 0) {
      this.pos.y = this.p.height;
      this.updatePrev();
    }
  }
}
