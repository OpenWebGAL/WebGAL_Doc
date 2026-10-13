### parallel
- Boolean

Plays alongside other animations already running on the same target.

By default, a new `setTransform` `setAnimation` `setTempAnimation` on the same target interrupts the animation currently playing on it. With `-parallel`, the new animation does not interrupt existing ones, and they play at the same time. A later animation without `-parallel` still interrupts all running animations on the target, including parallel ones.

Parallel animations should modify different properties. If several parallel animations modify the same property, the result is unpredictable. With `-parallel`, the animation only modifies the properties it writes.
