import bpy
prefs = bpy.context.preferences.addons['simple_collider'].preferences

prefs.naming_position = 'SUFFIX'
prefs.separator = '_'
prefs.basename = 'collider'
prefs.replace_name = True
prefs.colPreSuffix = ''
prefs.optionalSuffix = ''
prefs.IgnoreShapeForComplex = False
prefs.colSimpleComplex = ''
prefs.colSimple = 'Simple'
prefs.colComplex = 'Complex'
prefs.boxColSuffix = 'Box'
prefs.convexColSuffix = 'Convex'
prefs.sphereColSuffix = 'Sphere'
prefs.meshColSuffix = 'Mesh'
