controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(0, -200)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim`,
    100,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim0`,
    100,
    true
    )
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . 8 8 8 8 . . 8 8 8 6 6 . . 
    . . . 8 8 8 8 8 8 8 8 8 6 6 . . 
    . . . 8 8 1 9 9 9 9 9 8 6 6 . . 
    . . . 8 8 9 1 9 9 9 9 8 6 6 . . 
    . . . 8 8 9 9 9 9 9 9 8 6 6 . . 
    . . . 8 8 8 8 8 8 8 8 8 6 6 . . 
    . . . 8 8 8 8 8 8 8 8 8 6 6 . . 
    . . . 8 8 8 8 8 8 8 8 8 6 6 . . 
    . . . . . . 8 8 8 8 6 6 . . . . 
    . . . . . . 8 8 8 8 6 6 . . . . 
    . . . . . . 8 8 8 8 6 6 . . . . 
    . . . . . . f f f f d d . . . . 
    . . . . . . f f f f d d . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
scene.setBackgroundColor(9)
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 0)
forever(function () {
    mySprite.ay = 500
})
