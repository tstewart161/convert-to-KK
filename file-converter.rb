require 'sf2_to_js'
require 'tempfile'
sf = Sf2ToJs.new "./KKSlider.sf2", [105], "~/soundfonts"
sf.to_js # -> ~/soundfonts/FluidR3_GM.Banjo.sf2.js