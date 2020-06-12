enum ActionKind {
    Walking,
    Idle,
    Jumping,
    WalkForward,
    WalkBackward,
    WalkRight,
    WalkLeft,
    snake,
    snakeIdle,
    snakeAttack
}
namespace SpriteKind {
    export const Tree = SpriteKind.create()
    export const Sword = SpriteKind.create()
    export const Monkey = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
function SetPlayerAnimations () {
    animIdle = animation.createAnimation(ActionKind.Idle, 300)
    animIdle.addAnimationFrame(img`
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f e e d d d d d d e e f . . 
. . . f e e 4 4 4 4 e e f . . . 
. . e 4 f 2 2 2 2 2 2 f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`)
    animation.attachAnimation(playerSprite, animIdle)
    animWalkForward = animation.createAnimation(ActionKind.WalkForward, 300)
    animWalkForward.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. f f e 2 f f f f f f 2 e f f . 
. f f f f f e e e e f f f f f . 
. . f e f b f 4 4 f b f e f . . 
. . f e 4 1 f d d f 1 4 e f . . 
. . . f e 4 d d d d 4 e f e . . 
. . f e f 2 2 2 2 e d d 4 e . . 
. . e 4 f 2 2 2 2 e d d e . . . 
. . . . f 4 4 5 5 f e e . . . . 
. . . . f f f f f f f . . . . . 
. . . . f f f . . . . . . . . . 
`)
    animWalkForward.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f e e 2 2 2 2 2 2 e f f . . 
. f f e 2 f f f f f f 2 e f f . 
. f f f f f e e e e f f f f f . 
. . f e f b f 4 4 f b f e f . . 
. . f e 4 1 f d d f 1 4 e f . . 
. . e f e 4 d d d d 4 e f . . . 
. . e 4 d d e 2 2 2 2 f e f . . 
. . . e d d e 2 2 2 2 f 4 e . . 
. . . . e e f 5 5 4 4 f . . . . 
. . . . . f f f f f f f . . . . 
. . . . . . . . . f f f . . . . 
`)
    animation.attachAnimation(playerSprite, animWalkForward)
    animWalkBackward = animation.createAnimation(ActionKind.WalkBackward, 300)
    animWalkBackward.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f e e e e f f . . . . 
. . . f e e e f f e e e f . . . 
. . . f f f f 2 2 f f f f . . . 
. . f f e 2 e 2 2 e 2 e f f . . 
. . f e 2 f 2 f f f 2 f e f . . 
. . f f f 2 f e e 2 2 f f f . . 
. . f e 2 f f e e 2 f e e f . . 
. f f e f f e e e f e e e f f . 
. f f e e e e e e e e e e f f . 
. . . f e e e e e e e e f . . . 
. . . e f f f f f f f f 4 e . . 
. . . 4 f 2 2 2 2 2 e d d 4 . . 
. . . e f f f f f f e e 4 . . . 
. . . . f f f . . . . . . . . . 
`)
    animWalkBackward.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f e e e e f f . . . . 
. . . f e e e f f e e e f . . . 
. . . f f f f 2 2 f f f f . . . 
. . f f e 2 e 2 2 e 2 e f f . . 
. . f e f 2 f f f 2 f 2 e f . . 
. . f f f 2 2 e e f 2 f f f . . 
. . f e e f 2 e e f f 2 e f . . 
. f f e e e f e e e f f e f f . 
. f f e e e e e e e e e e f f . 
. . . f e e e e e e e e f . . . 
. . e 4 f f f f f f f f e . . . 
. . 4 d d e 2 2 2 2 2 f 4 . . . 
. . . 4 e e f f f f f f e . . . 
. . . . . . . . . f f f . . . . 
`)
    animation.attachAnimation(playerSprite, animWalkBackward)
    animWalkRight = animation.createAnimation(ActionKind.WalkRight, 300)
    animWalkRight.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . 
. . . f f e e e e f 2 f . . . . 
. . f f e e e e f 2 2 2 f . . . 
. . f e e e f f e e e e f . . . 
. . f f f f e e 2 2 2 2 e f . . 
. . f e 2 2 2 f f f f e 2 f . . 
. f f f f f f f e e e f f f . . 
. f f e 4 4 e b f 4 4 e e f . . 
. f e e 4 d 4 1 f d d e f f . . 
. . f e e e 4 d d d d f d d f . 
. . . . f e e 4 e e e f b b f . 
. . . . f 2 2 2 4 d d e b b f . 
. . . f f 4 4 4 e d d e b f . . 
. . . f f f f f f e e f f . . . 
. . . . f f . . . f f f . . . . 
`)
    animWalkRight.addAnimationFrame(img`
. . . . . f f f f f f . . . . . 
. . . f f e e e e f 2 f . . . . 
. . f f e e e e f 2 2 2 f . . . 
. . f e e e f f e e e e f . . . 
. . f f f f e e 2 2 2 2 e f . . 
. . f e 2 2 2 f f f f e 2 f . . 
. f f f f f f f e e e f f f . . 
. f f e 4 4 e b f 4 4 e e f . . 
. f e e 4 d 4 1 f d d e f f . . 
. . f e e e 4 d d d d f d d f . 
. . . f f e e 4 e e e f b b f . 
. . . . f 2 2 2 4 d d e b b f . 
. . . . e 2 2 2 e d d e b f . . 
. . . . f 4 4 4 f e e f f . . . 
. . . . . f f f f f f . . . . . 
. . . . . . f f f . . . . . . . 
`)
    animWalkRight.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . 
. . . f f e e e e f 2 f . . . . 
. . f f e e e e f 2 2 2 f . . . 
. . f e e e f f e e e e f . . . 
. . f f f f e e 2 2 2 2 e f . . 
. . f e 2 2 2 f f f f e 2 f . . 
. f f f f f f f e e e f f f . . 
. f f e 4 4 e b f 4 4 e e f . . 
. f e e 4 d 4 1 f d d e f . . . 
. . f e e e e e d d d f . . . . 
. . . . f 4 d d e 4 e f . . . . 
. . . . f e d d e 2 2 f . . . . 
. . . f f f e e f 5 5 f f . . . 
. . . f f f f f f f f f f . . . 
. . . . f f . . . f f f . . . . 
`)
    animation.attachAnimation(playerSprite, animWalkRight)
    animWalkLeft = animation.createAnimation(ActionKind.WalkLeft, 300)
    animWalkLeft.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . f f f f f f . . . . . . 
. . . f 2 f e e e e f f . . . . 
. . f 2 2 2 f e e e e f f . . . 
. . f e e e e f f e e e f . . . 
. f e 2 2 2 2 e e f f f f . . . 
. f 2 e f f f f 2 2 2 e f . . . 
. f f f e e e f f f f f f f . . 
. f e e 4 4 f b e 4 4 e f f . . 
. . f e d d f 1 4 d 4 e e f . . 
. . . f d d d e e e e e f . . . 
. . . f e 4 e d d 4 f . . . . . 
. . . f 2 2 e d d e f . . . . . 
. . f f 5 5 f e e f f f . . . . 
. . f f f f f f f f f f . . . . 
. . . f f f . . . f f . . . . . 
`)
    animWalkLeft.addAnimationFrame(img`
. . . . . f f f f f f . . . . . 
. . . . f 2 f e e e e f f . . . 
. . . f 2 2 2 f e e e e f f . . 
. . . f e e e e f f e e e f . . 
. . f e 2 2 2 2 e e f f f f . . 
. . f 2 e f f f f 2 2 2 e f . . 
. . f f f e e e f f f f f f f . 
. . f e e 4 4 f b e 4 4 e f f . 
. . f f e d d f 1 4 d 4 e e f . 
. f d d f d d d d 4 e e e f . . 
. f b b f e e e 4 e e f f . . . 
. f b b e d d 4 2 2 2 f . . . . 
. . f b e d d e 2 2 2 e . . . . 
. . . f f e e f 4 4 4 f . . . . 
. . . . . f f f f f f . . . . . 
. . . . . . . f f f . . . . . . 
`)
    animWalkLeft.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . 
. . . . f 2 f e e e e f f . . . 
. . . f 2 2 2 f e e e e f f . . 
. . . f e e e e f f e e e f . . 
. . f e 2 2 2 2 e e f f f f . . 
. . f 2 e f f f f 2 2 2 e f . . 
. . f f f e e e f f f f f f f . 
. . f e e 4 4 f b e 4 4 e f f . 
. . . f e d d f 1 4 d 4 e e f . 
. . . . f d d d e e e e e f . . 
. . . . f e 4 e d d 4 f . . . . 
. . . . f 2 2 e d d e f . . . . 
. . . f f 5 5 f e e f f f . . . 
. . . f f f f f f f f f f . . . 
. . . . f f f . . . f f . . . . 
`)
    animation.attachAnimation(playerSprite, animWalkLeft)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    isSwordVisible = 1
    sword.setFlag(SpriteFlag.Invisible, false)
    pause(100)
    sword.setFlag(SpriteFlag.Invisible, true)
    isSwordVisible = 0
})
function SetSnakeAnimations () {
    snakeSprite = sprites.create(img`
. . . . c c c c c c . . . . . . 
. . . c 6 7 7 7 7 6 c . . . . . 
. . c 7 7 7 7 7 7 7 7 c . . . . 
. c 6 7 7 7 7 7 7 7 7 6 c . . . 
. c 7 c 6 6 6 6 c 7 7 7 c . . . 
. f 7 6 f 6 6 f 6 7 7 7 f . . . 
. f 7 7 7 7 7 7 7 7 7 7 f . . . 
. . f 7 7 7 7 6 c 7 7 6 f c . . 
. . . f c c c c 7 7 6 f 7 7 c . 
. . c 7 2 7 7 7 6 c f 7 7 7 7 c 
. c 7 7 2 7 7 c f c 6 7 7 6 c c 
c 1 1 1 1 7 6 f c c 6 6 6 c . . 
f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
. f 6 1 1 1 1 1 1 6 6 6 f . . . 
. . c c c c c c c c c f . . . . 
`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(snakeSprite, sprites.castle.tileGrass2)
    animation.setAction(snakeSprite, ActionKind.snakeIdle)
    snakeSprite.follow(playerSprite, 20)
    scene.cameraFollowSprite(playerSprite)
    snakeIdle = animation.createAnimation(ActionKind.snakeIdle, 300)
    snakeIdle.addAnimationFrame(img`
. . . . c c c c c c . . . . . . 
. . . c 6 7 7 7 7 6 c . . . . . 
. . c 7 7 7 7 7 7 7 7 c . . . . 
. c 6 7 7 7 7 7 7 7 7 6 c . . . 
. c 7 c 6 6 6 6 c 7 7 7 c . . . 
. f 7 6 f 6 6 f 6 7 7 7 f . . . 
. f 7 7 7 7 7 7 7 7 7 7 f . . . 
. . f 7 7 7 7 6 c 7 7 6 f c . . 
. . . f c c c c 7 7 6 f 7 7 c . 
. . c 7 2 7 7 7 6 c f 7 7 7 7 c 
. c 7 7 2 7 7 c f c 6 7 7 6 c c 
c 1 1 1 1 7 6 f c c 6 6 6 c . . 
f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
. f 6 1 1 1 1 1 1 6 6 6 f . . . 
. . c c c c c c c c c f . . . . 
`)
    snakeIdle.addAnimationFrame(img`
. . . c c c c c c . . . . . . . 
. . c 6 7 7 7 7 6 c . . . . . . 
. c 7 7 7 7 7 7 7 7 c . . . . . 
c 6 7 7 7 7 7 7 7 7 6 c . . . . 
c 7 c 6 6 6 6 c 7 7 7 c . . . . 
f 7 6 f 6 6 f 6 7 7 7 f . . . . 
f 7 7 7 7 7 7 7 7 7 7 f . . . . 
. f 7 7 7 7 6 c 7 7 6 f . . . . 
. . f c c c c 7 7 6 f c c c . . 
. . c 6 2 7 7 7 f c c 7 7 7 c . 
. c 6 7 7 2 7 7 c f 6 7 7 7 7 c 
. c 1 1 1 1 7 6 6 c 6 6 6 c c c 
. c 1 1 1 1 1 6 6 6 6 6 6 c . . 
. c 6 1 1 1 1 1 6 6 6 6 6 c . . 
. . c 6 1 1 1 1 1 7 6 6 c c . . 
. . . c c c c c c c c c c . . . 
`)
    animation.attachAnimation(snakeSprite, snakeIdle)
    snakeAttack = animation.createAnimation(ActionKind.snakeAttack, 300)
    snakeAttack.addAnimationFrame(img`
. . . . . c c c c c c c . . . . 
. . . . c 6 7 7 7 7 7 6 c . . . 
. . . c 7 c 6 6 6 6 c 7 6 c . . 
. . c 6 7 6 f 6 6 f 6 7 7 c . . 
. . c 7 7 7 7 7 7 7 7 7 7 c . . 
. . f 7 8 1 f f 1 6 7 7 7 f . . 
. . f 6 f 1 f f 1 f 7 7 7 f . . 
. . . f f 2 2 2 2 f 7 7 6 f . . 
. . c c f 2 2 2 2 7 7 6 f c . . 
. c 7 7 7 7 7 7 7 7 c c 7 7 c . 
c 7 1 1 1 7 7 7 7 f c 6 7 7 7 c 
f 1 1 1 1 1 7 6 f c c 6 6 6 c c 
f 1 1 1 1 1 1 6 6 c 6 6 6 c . . 
f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
. f 6 1 1 1 1 1 6 6 6 6 c . . . 
. . f f c c c c c c c c . . . . 
`)
    snakeAttack.addAnimationFrame(img`
. . . . . . c c c c c c c . . . 
. . . . . c f f 6 6 f f 7 c . . 
. . . . c 7 6 6 6 6 6 6 7 6 c . 
. . . c 7 7 7 7 7 7 7 7 7 7 c . 
. . . c 7 8 1 f f 1 6 7 7 7 c . 
. . . f 6 f 1 f f 1 f 7 7 7 f . 
. . . f 6 f 2 2 2 2 f 7 7 7 f . 
. . c c 6 f 2 2 2 2 f 7 7 6 f . 
. c 7 7 7 7 2 2 2 2 7 7 f c . . 
c 7 1 1 1 7 7 7 7 7 c c 7 7 c . 
f 1 1 1 1 1 7 7 7 f c 6 7 7 7 c 
f 1 1 1 1 1 1 6 f c c 6 6 6 c c 
f 6 1 1 1 1 1 6 6 c 6 6 6 c . . 
f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
. f 6 1 1 1 1 6 6 6 6 6 c . . . 
. . f f c c c c c c c c . . . . 
`)
    snakeAttack.addAnimationFrame(img`
. . . . . . c c c c c c c . . . 
. . . . . c f f 6 6 f f 7 c . . 
. . . . c 7 6 6 6 6 6 6 7 6 c . 
. . . c 7 7 7 7 7 7 7 7 7 7 c . 
. . . c 7 8 1 f f 1 6 7 7 7 c . 
. . . f 6 f 1 f f 1 f 7 7 7 f . 
. . . f 6 f 2 2 2 2 f 7 7 7 f . 
. . c c 6 f 2 2 2 2 f 7 7 6 f . 
. c 7 7 7 7 2 2 2 2 7 7 f c . . 
c 7 1 1 1 7 7 7 7 7 c c 7 7 c . 
f 1 1 1 1 1 7 7 7 f c 6 7 7 7 c 
f 1 1 1 1 1 1 6 f c c 6 6 6 c c 
f 6 1 1 1 1 1 6 6 c 6 6 6 c . . 
f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
. f 6 1 1 1 1 6 6 6 6 6 c . . . 
. . f f c c c c c c c c . . . . 
`)
    snakeAttack.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . c c c c c 
. . . . . . . . . c c 7 7 7 6 c 
. . . . . . . . c c 7 7 7 c c . 
. . . . . . . . c 6 7 7 c . . . 
. . . . . . . . c 6 6 6 c . . . 
. . . c c c c c c 6 6 6 c c . . 
. . c 6 7 7 7 7 6 c c 6 6 6 c . 
. c 7 7 7 7 7 7 7 7 c 6 6 6 c c 
c 6 7 7 7 7 7 7 7 7 6 c 6 6 6 c 
c 7 c 6 6 6 6 c 7 7 7 c 6 6 6 c 
f 7 c c 6 6 c c 7 7 7 f 6 6 6 c 
f 7 6 f 6 6 f 6 7 7 7 f 6 6 6 c 
. c 1 c f f 1 c 7 6 f 6 6 c c . 
. c c c c c c c c c c c c . . . 
`)
    snakeAttack.addAnimationFrame(img`
. . . . . . . . . . . c c c c c 
. . . . . . . . . c c 7 7 7 6 c 
. . . . . . . . c c 7 7 7 c c . 
. . . . . . . . c 6 7 7 c . . . 
. . . . . . . . c 6 6 6 c . . . 
. . . . . . . . c 6 6 6 c c . . 
. . . c c c c c c c 6 6 6 c c . 
. . c 6 7 7 7 7 6 c c 6 6 6 c . 
. c 7 7 7 7 7 7 7 7 c 6 6 6 c c 
c 6 7 7 7 7 7 7 7 7 6 c 6 6 6 c 
c 7 c 6 6 6 6 c 7 7 7 c 6 6 6 c 
f 7 c c 6 6 c c 7 7 7 f 6 6 6 c 
f 7 6 f 6 6 f 6 7 7 7 f 6 6 6 c 
. f 7 7 7 7 7 7 7 7 6 f 6 6 c . 
. c 1 c f f 1 c 7 6 f 6 6 c c . 
. c c c c c c c c c c c c . . . 
`)
    snakeAttack.addAnimationFrame(img`
. . . . . . . . . . . c c c c c 
. . . . . . . . . c c 7 7 7 6 c 
. . . . . . . . c c 7 7 7 c c . 
. . . . . . . . c 6 7 7 c . . . 
. . . . . . . . c 6 6 6 c . . . 
. . . . . . . . c 6 6 6 c c . . 
. . . c c c c c c c 6 6 6 c c . 
. . c 6 7 7 7 7 6 c c 6 6 6 c . 
. c 7 7 7 7 7 7 7 7 c 6 6 6 c c 
c 6 7 7 7 7 7 7 7 7 6 c 6 6 6 c 
c 7 c 6 6 6 6 c 7 7 7 c 6 6 6 c 
f 7 c c 6 6 c c 7 7 7 f 6 6 6 c 
f 7 6 f 6 6 f 6 7 7 7 f 6 6 6 c 
. f 7 7 7 7 7 7 7 7 6 f 6 6 c . 
. c 1 c f f 1 c 7 6 f 6 6 c c . 
. c c c c c c c c c c c c . . . 
`)
    animation.attachAnimation(snakeSprite, snakeAttack)
}
sprites.onOverlap(SpriteKind.Sword, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (isSwordVisible > 0) {
        otherSprite.destroy(effects.fire, 200)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    animation.setAction(otherSprite, ActionKind.snakeAttack)
    info.changeLifeBy(-1)
    scene.cameraShake(4, 500)
    pause(2000)
})
function CalculateSwordPlacement () {
    if (playerSprite.vx < 0) {
        sword.right = playerSprite.left
        sword.y = playerSprite.y
    } else if (playerSprite.vx > 0) {
        sword.left = playerSprite.right
        sword.y = playerSprite.y
    } else if (playerSprite.vy > 0) {
        sword.top = playerSprite.bottom
        sword.x = playerSprite.x
    } else if (playerSprite.vy < 0) {
        sword.bottom = playerSprite.top
        sword.x = playerSprite.x
    } else {
        sword.top = playerSprite.bottom
        sword.x = playerSprite.x
    }
}
function TriggerPlayerAnimations () {
    if (playerSprite.vx > 0) {
        animation.setAction(playerSprite, ActionKind.WalkRight)
    } else if (playerSprite.vx < 0) {
        animation.setAction(playerSprite, ActionKind.WalkLeft)
    } else if (playerSprite.vy > 0) {
        animation.setAction(playerSprite, ActionKind.WalkForward)
    } else if (playerSprite.vy < 0) {
        animation.setAction(playerSprite, ActionKind.WalkBackward)
    } else {
        animation.setAction(playerSprite, ActionKind.Idle)
    }
}
let snakeAttack: animation.Animation = null
let snakeIdle: animation.Animation = null
let snakeSprite: Sprite = null
let animWalkLeft: animation.Animation = null
let animWalkRight: animation.Animation = null
let animWalkBackward: animation.Animation = null
let animWalkForward: animation.Animation = null
let animIdle: animation.Animation = null
let treeSprite: Sprite = null
let sword: Sprite = null
let playerSprite: Sprite = null
let isSwordVisible = 0
isSwordVisible = 0
info.setLife(5)
tiles.setTilemap(tiles.createTilemap(
            hex`100010000e10101010101010101010101010100f0d09090909090909090909090909090d0d09090909090901090909090909090d0d09010909090909090909090909090d0d09090909090909090909090909090d0d09090909090909090909010909090d0d09090909090909090909090909090d0d09090909090909090909090909090d0d09090909090909090909090909090d0d09090909090109090909090901090d0d09090909090909151515090909090d0d09090909090909091515090909090d0d09090109090909091501090909090d0d09090909090909090915090909090d0d09090909090909090909090909090d0a0c0c0c0c0c0c0c0c0c0c0c0c0c0c0b`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . 2 2 2 . . . . . . . . 2 
2 . . . 2 . 2 . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tileGrass3,sprites.builtin.forestTiles0,sprites.dungeon.chestClosed,sprites.castle.rock0,sprites.castle.rock1,sprites.vehicle.roadHorizontal,sprites.dungeon.hazardWater,sprites.castle.shrub,sprites.castle.tileGrass1,sprites.builtin.forestTiles21,sprites.builtin.forestTiles23,sprites.builtin.forestTiles22,sprites.builtin.forestTiles4,sprites.builtin.forestTiles1,sprites.builtin.forestTiles3,sprites.builtin.forestTiles2,sprites.castle.saplingPine,sprites.castle.tileDarkGrass3,sprites.builtin.forestTiles17,sprites.castle.tilePath5,sprites.castle.tileGrass2],
            TileScale.Sixteen
        ))
playerSprite = sprites.create(img`
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f f f f d d d d d e e f . . 
. f d d d d f 4 4 4 e e f . . . 
. f b b b b f 2 2 2 2 f 4 e . . 
. f b b b b f 2 2 2 2 f d 4 . . 
. . f c c f 4 5 5 4 4 f 4 4 . . 
. . . f f f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player)
sword = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . 4 4 4 5 5 4 4 4 . . . . 
. . . 3 3 3 3 4 4 4 4 4 4 . . . 
. . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
. . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
. 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
. 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
. 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
. 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
. . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
. . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
. . . 4 2 2 2 2 2 2 2 2 4 . . . 
. . . . 4 4 2 2 2 2 4 4 . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Sword)
let monkey = sprites.create(img`
. . . . f f f f f . . . . . . . 
. . . f e e e e e f . . . . . . 
. . f d d d d e e e f . . . . . 
. c d f d d f d e e f f . . . . 
. c d f d d f d e e d d f . . . 
c d e e d d d d e e b d c . . . 
c d d d d c d d e e b d c . f f 
c c c c c d d d e e f c . f e f 
. f d d d d d e e f f . . f e f 
. . f f f f f e e e e f . f e f 
. . . . f e e e e e e e f f e f 
. . . f e f f e f e e e e f f . 
. . . f e f f e f e e e e f . . 
. . . f d b f d b f f e f . . . 
. . . f d d c d d b b d f . . . 
. . . . f f f f f f f f f . . . 
`, SpriteKind.Monkey)
sword.setFlag(SpriteFlag.Invisible, true)
controller.moveSprite(playerSprite)
SetPlayerAnimations()
SetSnakeAnimations()
tiles.placeOnRandomTile(playerSprite, sprites.castle.tileGrass1)
let houseSprite = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . e 2 e 2 2 e 2 e . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 2 2 2 e e e 2 2 e 2 e 2 2 2 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 2 2 2 e 2 2 e 2 e 2 2 e e e 2 2 e 2 2 2 . . . . . . . . . . . . . . 
. . . . . . . . . . . e 2 2 e 2 2 e e e e 2 e 2 2 e 2 e e e e 2 2 e 2 2 e . . . . . . . . . . . 
. . . . . . . . e e e e 2 2 e 2 2 e 2 2 e 2 e 2 2 e 2 e 2 2 e 2 2 e 2 2 e e e e . . . . . . . . 
. . . . . 2 2 2 e 2 2 e 2 2 e e e e 2 2 e 2 e 2 2 e 2 e 2 2 e e e e 2 2 e 2 2 e 2 2 2 . . . . . 
. . . 2 2 e e e e 2 2 e 2 2 e 2 2 e 2 2 e e e 2 2 e e e 2 2 e 2 2 e 2 2 e 2 2 e e e e 2 2 . . . 
4 c c 2 2 e 2 2 e 2 2 e e e e 2 2 e 2 2 e 2 e 2 2 e 2 e 2 2 e 2 2 e e e e 2 2 e 2 2 e 2 2 c c 4 
6 c 6 e e e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e 2 e 2 2 e 2 e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e e e 6 c 6 
4 6 6 2 2 e 2 2 e e e e 2 2 e 2 2 e e e e 2 e 2 2 e 2 e e e e 2 2 e 2 2 e e e e 2 2 e 2 2 6 6 4 
4 6 6 2 2 e 2 2 e 2 2 e 2 2 e e e e 2 2 e 2 e 2 2 e 2 e 2 2 e e e e 2 2 e 2 2 e 2 2 e 2 2 6 6 4 
4 c c 2 2 e e e e 2 2 e 2 2 e 2 2 e 2 2 e e e 2 2 e e e 2 2 e 2 2 e 2 2 e 2 2 e e e e 2 2 c c 4 
6 c 6 2 2 e 2 2 e 2 2 e e e e 2 2 e 2 2 e 2 e 2 2 e 2 e 2 2 e 2 2 e e e e 2 2 e 2 2 e 2 2 6 c 6 
4 6 6 e e e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e 2 e 2 2 e 2 e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e e e 6 6 4 
4 6 6 2 2 e 2 2 e e e e 2 2 e 2 2 e 2 2 e 2 e 2 2 e 2 e 2 2 e 2 2 e 2 2 e e e e 2 2 e 2 2 6 6 4 
4 c c 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e e e e 2 e 2 2 e 2 e e e e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 c c 4 
6 c 6 2 2 e e e e 2 2 e 2 2 e e e e 2 2 e e e 2 2 e e e 2 2 e e e e 2 2 e 2 2 e e e e 2 2 6 c 6 
4 6 6 2 2 e 2 2 e 2 2 e e e e 2 2 e 2 2 e 2 e 2 2 e 2 e 2 2 e 2 2 e e e e 2 2 e 2 2 e 2 2 6 6 4 
4 6 6 e e e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e 2 e 2 2 e 2 e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e e e 6 6 4 
4 c c 2 2 e 2 2 e e e e 2 2 e 2 2 e 2 2 e 2 e 2 2 e 2 e 2 2 e 2 2 e 2 2 e e e e 2 2 e 2 2 c c 4 
6 c 6 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e e e 2 2 e e e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 6 c 6 
4 6 6 2 2 e e e e 2 2 e 2 2 e 2 2 e e e c c 6 6 6 6 c c e e e 2 2 e 2 2 e 2 2 e e e e 2 2 6 6 4 
4 6 6 2 2 e 2 2 e 2 2 e 2 2 e e e c c 6 6 6 6 6 6 6 6 6 6 c c e e e 2 2 e 2 2 e 2 2 e 2 2 6 6 4 
4 c c e e e 2 2 e 2 2 e e e c c 6 6 6 6 6 c c c c c c 6 6 6 6 6 c c e e e 2 2 e 2 2 e e e c c 4 
6 c 6 2 2 e 2 2 e e e c c 6 6 6 6 6 c c 6 4 4 4 4 4 4 6 c c 6 6 6 6 6 c c e e e 2 2 e 2 2 6 c 6 
4 6 6 2 2 e 2 2 c c 6 6 6 6 6 c c 6 4 4 4 4 4 4 4 4 4 4 4 4 6 c c 6 6 6 6 6 c c 2 2 e 2 2 6 6 4 
4 6 6 2 2 c c 6 6 6 6 c c c 6 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 6 c c c 6 6 6 6 c c 2 2 6 6 4 
4 c c c 6 6 6 6 c c c 6 4 4 4 b c c 6 6 6 6 6 6 6 6 6 6 6 6 c c b 4 4 4 6 c c c 6 6 6 6 c c c 4 
c c c c c c c c 6 6 6 6 6 6 6 c b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b c 6 6 6 6 6 6 6 c c c c c c c c 
6 4 4 4 4 4 4 4 4 4 4 4 4 6 c 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 c 6 4 4 4 4 4 4 4 4 4 4 4 4 6 
6 6 c b 4 4 4 4 4 4 4 4 4 c b 4 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 4 b c 4 4 4 4 4 4 4 4 4 b c 6 6 
6 6 6 c c c c c c c c c c c d 1 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 1 d c c c c c c c c c c c 6 6 6 
6 6 6 6 4 4 4 4 4 4 4 4 4 c 1 1 6 e e e e e e e e e e e e e e 6 1 1 c 4 4 4 4 4 4 4 4 4 6 6 6 6 
6 6 6 e 2 2 2 2 2 2 2 e 4 c 1 6 e 4 e 4 4 e 4 4 e 4 4 e 4 4 e e 6 1 c 4 e 2 2 2 2 2 2 2 e 6 6 6 
6 6 6 e e e e e e e e e 4 c 1 6 e 4 e 4 4 e 4 4 e 4 4 e 4 4 e e 6 1 c 4 e e e e e e e e e 6 6 6 
6 6 6 e d d d d d d d e 4 c 6 6 f 4 e 4 e f f f f f f e 4 4 e e 6 6 c 4 e d d d d d d d e 6 6 6 
6 6 6 e d f f d f f d e 4 c 6 6 f 4 e f f f f f f f f f f 4 e e 6 6 c 4 e d f f d f f d e 6 6 6 
6 6 6 e d c c d c c d e 4 c 6 6 f 4 e f f f f f f f f f f e e e 6 6 c 4 e d c c d c c d e 6 6 6 
6 6 6 e d d d d d d d e 4 c 6 6 f 4 e e e e e e e e e e e e e e 6 6 c 4 e d d d d d d d e 6 6 6 
c 6 6 e d f f d f f d e 4 c 6 6 e 4 e 4 4 e 4 4 e 4 4 e 4 4 e e 6 6 c 4 e d f f d f f d e 6 6 c 
c 6 6 e d c c d c c d e 4 c 6 6 e 4 e 4 4 e 4 4 e 4 4 e 4 4 e e 6 6 c 4 e d c c d c c d e 6 6 c 
c c 6 6 6 6 6 6 6 6 6 6 4 c 6 6 e 4 e 4 4 e 4 4 e 4 4 f e e e e 6 6 c 4 6 6 6 6 6 6 6 6 6 6 c c 
. c 6 6 4 4 4 4 4 4 4 4 4 c 6 6 e 4 e 4 4 e 4 4 e 4 4 f f f f e 6 6 c 4 4 4 4 4 4 4 4 4 6 6 c . 
. . c 6 4 e e e 4 e e e 4 c 6 6 f 4 e 4 4 e 4 4 e 4 4 f 4 4 f e 6 6 c 4 e e e 4 e e e 4 6 c . . 
. . . c 4 e e e 4 e e e 4 c 6 6 f 4 e 4 4 e 4 4 e 4 4 e f f e e 6 6 c 4 e e e 4 e e e 4 c . . . 
. . . . 6 4 4 4 4 4 4 4 4 c 6 6 f 4 e 4 4 e 4 4 e 4 4 e 4 4 e e 6 6 c 4 4 4 4 4 4 4 4 6 . . . . 
. . . . . 6 4 e e e 4 4 4 c 6 6 f 4 e 4 4 e 4 4 e 4 4 e 4 4 e e 6 6 c 4 4 4 e e e 4 6 . . . . . 
. . . . . . 6 c c c 6 6 6 c 6 6 e 4 e 4 4 e 4 4 e 4 4 e 4 4 e e 6 6 c 6 6 6 c c c 6 . . . . . . 
`, SpriteKind.Food)
tiles.placeOnTile(houseSprite, tiles.getTileLocation(5, 5))
for (let value of tiles.getTilesByType(sprites.castle.tileGrass3)) {
    treeSprite = sprites.create(img`
. . . . . . c c 6 6 . . . . . . 
. . . . . c 6 5 7 6 c . . . . . 
. . . . c 6 7 7 5 7 6 c . . . . 
. . . . c c 6 7 7 6 6 6 . . . . 
. . . c c 6 c 6 6 6 7 c c . . . 
. . 6 c 6 6 6 7 7 7 c c 6 c . . 
. . c 7 6 6 6 6 7 6 6 7 7 6 . . 
. . c 6 7 7 7 7 7 7 7 7 6 c . . 
. . c c 6 7 7 7 7 7 7 6 c c . . 
. c 6 7 c c 7 6 6 7 6 6 7 6 c . 
. c 7 7 7 6 6 6 6 6 7 7 7 7 c . 
. c 6 7 7 7 7 7 7 7 7 7 7 6 6 . 
. c c 7 7 6 7 7 7 6 7 7 6 6 6 6 
c 6 7 6 c c 6 7 6 6 6 6 6 7 7 6 
c 7 7 7 7 6 6 6 6 6 6 7 7 7 7 6 
c c 7 7 7 7 7 7 7 7 7 7 7 7 6 c 
. c 6 7 6 7 7 7 6 7 7 7 6 7 c . 
. . c c 6 6 7 6 6 6 7 6 6 c . . 
. . . c c c 6 c 6 6 c c c . . . 
. . . . . c c c c c c . . . . . 
. . . . . . . e e . . . . . . . 
. . . . . . e e e e . . . . . . 
. . . . . e e e e e e . . . . . 
. . . . . . . e e . . . . . . . 
`, SpriteKind.Tree)
    tiles.placeOnTile(treeSprite, value)
}
animation.runImageAnimation(
monkey,
[img`
. . . . f f f f f . . . . . . . 
. . . f e e e e e f . . . . . . 
. . f d d d d e e e f . . . . . 
. c d f d d f d e e f f . . . . 
. c d f d d f d e e d d f . . . 
c d e e d d d d e e b d c . . . 
c d d d d c d d e e b d c . f f 
c c c c c d d d e e f c . f e f 
. f d d d d d e e f f . . f e f 
. . f f f f f e e e e f . f e f 
. . . . f e e e e e e e f f e f 
. . . f e f f e f e e e e f f . 
. . . f e f f e f e e e e f . . 
. . . f d b f d b f f e f . . . 
. . . f d d c d d b b d f . . . 
. . . . f f f f f f f f f . . . 
`,img`
. . . . f f f f f . . . . . . . 
. . . f e e e e e f . . . . . . 
. . f d d d d e e e f . . . . . 
. c d f d d f d e e f . . . . . 
. c d f d d f d e e f f . . . . 
c d e e d d d d e e d d f . . . 
c d d d d c d d e e b d c . . . 
c c c c c d d e e e b d c . f f 
. f d d d d e e e f f c . f e f 
. f f f f f f e e e e f . f e f 
. f f f f e e e e e e e f f e f 
f d d f d d f e f e e e e f f . 
f d b f d b f e f e e e e f . . 
f f f f f f f f f f f f e f . . 
. . . . . . . . . f c d d f . . 
. . . . . . . . . . f f f f . . 
`,img`
. . . . f f f f f . . . . . . . 
. . . f e e e e e f . . . . . . 
. . f d d d d e e e f f . . . . 
. c d d d d d d e e d d f . . . 
. c d f d d f d e e b d c . . . 
c d d f d d f d e e b d c . f f 
c d e e d d d d e e f c . f e f 
c d d d d c d e e e f . . f e f 
. f c c c d e e e f f . . f e f 
. . f f f f f e e e e f . f e f 
. . . . f e e e e e e e f f f . 
. . f f e f e e f e e e e f . . 
. f e f f e e f f f e e e f . . 
f d d b d d c f f f f f f b f . 
f d d c d d d f . . f c d d f . 
. f f f f f f f . . . f f f . . 
`,img`
. . . . f f f f f . . . . . . . 
. . . f e e e e e f f f . . . . 
. . f d d d e e e e d d f . . . 
. c d d d d d e e e b d c . . . 
. c d d d d d d e e b d c . . . 
c d d f d d f d e e f c . f f . 
c d d f d d f d e e f . . f e f 
c d e e d d d d e e f . . f e f 
. f d d d c d e e f f . . f e f 
. . f f f d e e e e e f . f e f 
. . . . f e e e e e e e f f f . 
. . . . f f e e e e e b f f . . 
. . . f e f f e e c d d f f . . 
. . f d d b d d c f f f . . . . 
. . f d d c d d d f f . . . . . 
. . . f f f f f f f . . . . . . 
`],
200,
true
)
game.onUpdate(function () {
    CalculateSwordPlacement()
    TriggerPlayerAnimations()
    if (Math.percentChance(1)) {
        monkey.setVelocity(Math.randomRange(-10, 10), Math.randomRange(-10, 10))
    }
})
