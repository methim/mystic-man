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
        . 9 9 9 9 9 9 9 9 9 9 9 . . . . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 . . . 
        . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
        . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
        . . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        . . . 9 9 9 9 9 9 9 9 9 9 9 9 9 
        . . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
        . . . 9 9 9 9 9 9 9 9 9 9 9 . . 
        . . . 9 9 9 9 9 9 9 9 9 9 . . . 
        . . 9 9 9 9 9 9 9 9 9 9 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 100, 0)
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
        `, mySprite, -100, 0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    tiles.setTilemap(tilemap`level8`)
    scene.setBackgroundColor(5)
    mySprite2 = sprites.create(img`
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ..............................................222222222222222222222222222222222.....................
        ..............................................222222222222222222222222222222222.....................
        ..............................................222222222222222222222222222222222.....................
        ..............................................222222222222222222222222222222222.....................
        ..............................................222222222222222222222222222222222.....................
        ..............................................222222222222222222222222222222222.....................
        ..............................................222222222222222222222222222222222.....................
        ..............................................222222222222222222222222222222222.....................
        ..............................................222222222222222222222222222222222.....................
        ..............................................222222222999999999999999999922222.....................
        ..............................................222222222999999999999999111922222.....................
        ..............................................222222222999999999999999191922222.....................
        ..............................................222222222999999999999999191922222.....................
        ..............................................222222222999999999999999111922222.....................
        ..............................................222222222999999999999999999922222.....................
        ..............................................222222222999999999999999999922222.....................
        ..............................................222222222999999999999999999922222.....................
        ..............................................222222222222222222222222222222222.....................
        ..............................................222222222222222222222222222222222.....................
        ..............................................222222222222222222222222222222222.....................
        ..............................................222222222222222222222222222222222.....................
        ..............................................222222222222222222222222222222222.....................
        ..............................................222222222222222222222222222222222.....................
        ..............................................222222222222222222222222222222222.....................
        ..............................................222222222222222222222222222222222...fffffff...........
        ..............................fffffff.........222222222222222222222222222222222..fffffffff..........
        .............................fffffffff........222222222222222222222222222222222.fffffffffff.........
        ............................fffffffffff.......222222222222222222222222222222222.fffffffffff.........
        ............................fffffffffff.......222222222222222222222222222222222.fffffffffff.........
        ............................fffffffffff..............22222222222222222222222....fffffffffff.........
        ............................fffffffffff..............22222222222222222222222....fffffffffff.........
        ............................fffffffffff..............22222222222222222222222....fffffffffff.........
        ............................fffffffffff..............22222222222222222222222....fffffffffff.........
        ............................fffffffffff..............22222222222222222222222.....fffffffff..........
        .............................fffffffff...............22222222222222222222222......fffffff...........
        ..............................fffffff................22222222222222222222222........................
        .....................................................22222222222222222222222........................
        .....................................................22222222222222222222222........................
        .....................................................22222222222222222222222........................
        .....................................................22222222222222222222222........................
        .....................................................22222222222222222222222........................
        .....................................................22222222222222222222222........................
        .....................................................22222222222222222222222........................
        ........................................................22222222222222222222........................
        ........................................................22222222222222222...........................
        ........................................................22222222222222222...........................
        ......................................................ffffffffffffffffffff..........................
        .......................................................ffffffffffffffffffff.........................
        .......................................................fffffffffffffffffff..........................
        .......................................................fffffffffffffffffff..........................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ..............................................................................33333.................
        `, SpriteKind.Enemy)
    statusbar2 = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar2.setColor(2, 15)
    statusbar2.attachToSprite(mySprite2)
    statusbar2.setLabel("BOSS.")
    mySprite2.setPosition(104, 73)
    mySprite.setPosition(4, 87)
    animation.runImageAnimation(
    mySprite2,
    assets.animation`myAnim2`,
    100,
    true
    )
    mySprite3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 2 . . . . . . 2 . . . . . 
        . . . 2 . . . . . . 2 . . . . . 
        . . . 2 2 2 2 2 2 2 2 . . . . . 
        . . . 2 2 2 2 2 2 2 2 . . . . . 
        . . . 2 2 9 9 9 9 2 2 . . . . . 
        . . . 2 2 9 9 9 9 2 2 . . . . . 
        . . . 2 2 2 2 2 2 2 2 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    mySprite3.follow(mySprite, 10)
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
let mySprite3: Sprite = null
let statusbar2: StatusBarSprite = null
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
