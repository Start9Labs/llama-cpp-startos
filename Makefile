# overrides to s9pk.mk must precede the include statement
ARCHES := x86 arm
TARGETS := generic nvidia rocm vulkan

include s9pk.mk

.PHONY += generic nvidia rocm vulkan

generic: ; VARIANT=generic $(MAKE) arches
nvidia:  ; VARIANT=nvidia  $(MAKE) arches
rocm:    ; VARIANT=rocm    $(MAKE) arches ARCHES=x86
vulkan:  ; VARIANT=vulkan  $(MAKE) arches
