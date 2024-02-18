function slugify(title) {
let slug
    slug = title.toLowerCase()
    slug = slug.slipt(" ")
    slug = slug.join("-")
return slug

}