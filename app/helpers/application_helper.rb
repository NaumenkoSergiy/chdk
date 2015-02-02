module ApplicationHelper
  def images_render
    s = ""
    @cms_site.files.images.for_category('sliders').each do |fl|
      my_src = "/system/comfy/cms/files/files/000/000/%03d/original/%s" % [fl.id, fl.file_file_name]
      s << image_tag(my_src, class: "pic").html_safe
    end
    s.html_safe
  end
end
