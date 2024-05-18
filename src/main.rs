use rocket::fs::NamedFile;
use std::path::{Path, PathBuf};

#[macro_use] extern crate rocket;

fn path() -> &'static Path {
    Path::new("client")
}

#[get("/")]
async fn index() -> Option<NamedFile> {
    NamedFile::open(path().join("index.html")).await.ok()
}

#[get("/<file..>")]
async fn files(file: PathBuf) -> Option<NamedFile> {
    NamedFile::open(path().join(file)).await.ok()
}

#[get("/")]
async fn petitions() -> Option<NamedFile> {
    NamedFile::open(path().join("petitions.html")).await.ok()
}

#[launch]
fn rocket() -> _ {
    rocket::build()
    //.configure(rocket::Config::figment().merge(("port", 9797)))
    .mount("/", routes![index, files])
    .mount("/petitions", routes![petitions])
}
