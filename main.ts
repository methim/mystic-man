scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    scene.setBackgroundColor(15)
    tiles.setTilemap(tilemap`level2`)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(0, -200)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    statusbar.value += -1
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim`,
    100,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    scene.setBackgroundColor(15)
    tiles.setTilemap(tilemap`level2`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim0`,
    100,
    true
    )
})
let statusbar: StatusBarSprite = null
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
mySprite.setPosition(22, 110)
scene.setBackgroundColor(9)
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 0)
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.setLabel("HP")
statusbar.attachToSprite(mySprite)
forever(function () {
    mySprite.ay = 500
})
