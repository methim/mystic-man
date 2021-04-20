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
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . 6 6 6 6 9 9 9 6 9 9 9 . . . . 
        6 6 6 6 9 9 9 9 9 6 9 9 9 . . . 
        . . 6 6 6 9 9 9 9 9 6 9 9 9 . . 
        . 6 6 6 9 9 9 9 9 9 9 6 9 9 9 . 
        . . 6 6 9 9 9 9 9 9 9 9 6 9 9 9 
        . . . 6 6 9 9 9 9 9 9 9 9 6 9 9 
        . . 6 6 9 9 9 9 9 9 9 9 9 9 6 9 
        . 6 6 6 9 9 9 9 9 9 9 9 9 9 9 6 
        . 6 6 6 6 6 9 9 9 9 9 9 9 9 9 . 
        . . . 6 9 9 6 9 9 9 9 9 9 9 . . 
        . . . 6 9 9 9 6 9 9 9 9 9 . . . 
        . . 6 6 6 9 9 9 6 9 9 9 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 200, 0)
    projectile.startEffect(effects.fire, 500)
    music.pewPew.play()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . 9 9 9 9 9 9 9 9 9 9 9 . 
        . . . 9 9 9 9 9 9 9 9 9 9 9 9 9 
        . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
        . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 . . . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
        . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
        . . 9 9 9 9 9 9 9 9 9 9 9 . . . 
        . . . 9 9 9 9 9 9 9 9 9 9 . . . 
        . . . . 9 9 9 9 9 9 9 9 9 9 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, -200, 0)
    projectile.startEffect(effects.fire, 500)
    music.pewPew.play()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    scene.setBackgroundColor(14)
    tiles.setTilemap(tilemap`level8`)
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . 4 4 4 4 . . 4 4 4 6 6 . . 
        . . . 4 4 4 4 4 4 4 4 4 6 6 . . 
        . . . 4 4 1 9 9 9 9 9 4 6 6 . . 
        . . . 4 4 9 1 9 9 9 9 4 6 6 . . 
        . . . 4 4 9 9 9 9 9 9 4 6 6 . . 
        . . . 4 4 4 4 4 4 4 4 4 6 6 . . 
        . . . 4 4 4 4 4 4 4 4 4 6 6 . . 
        . . . 4 4 4 4 4 4 4 4 4 6 6 . . 
        . . . . . . 4 4 4 4 6 6 . . . . 
        . . . . . . 4 4 4 4 6 6 . . . . 
        . . . . . . 4 4 4 4 6 6 . . . . 
        . . . . . . f f f f 6 6 . . . . 
        . . . . . . f f f f 6 6 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    mySprite.setPosition(0, 0)
    game.showLongText("???:what the who the hell is you", DialogLayout.Bottom)
    game.showLongText("you:...", DialogLayout.Bottom)
    game.showLongText("???:hmm well i guess i will start first.", DialogLayout.Bottom)
    game.showLongText("you:...", DialogLayout.Bottom)
    game.showLongText("??? well um on my way home with my cool new mech suit", DialogLayout.Bottom)
    game.showLongText("then i got teleported to a weird place i had to survive each one.", DialogLayout.Bottom)
    game.showLongText("", DialogLayout.Bottom)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim`,
    100,
    true
    )
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.over(false, effects.splatter)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim0`,
    100,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    mySprite.setPosition(0, 113)
    scene.setBackgroundColor(15)
    tiles.setTilemap(tilemap`level5`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    scene.setBackgroundColor(0)
    tiles.setTilemap(tilemap`level7`)
    mySprite.setPosition(19, 93)
})
let mySprite2: Sprite = null
let projectile: Sprite = null
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
mySprite.setPosition(18, 91)
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
forever(function () {
    music.playMelody("F E F E D E F G ", 110)
    music.playMelody("F E F E D E F D ", 110)
})
