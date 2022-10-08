import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from '../components/Carousel/Carousel'

const Home = () => {
    return (
        <main className="my-5">
            <div className="container">
                <Carousel />
                <section className="text-center">
                    <h4 className="mb-5"><strong>Latest posts</strong></h4>
                    <div className="row rounded-3">
                        <div className="col-lg-4 col-md-12 mb-4">
                            <div className="card">
                                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                    <img src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" className="img-fluid" />
                                    <Link to="/posts/:id">
                                        <div className="mask"></div>
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Post title</h5>
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up the bulk of the
                                        card's content.
                                    </p>
                                    <Link to="/posts/:id" className="btn btn-primary">Read</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card">
                                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                    <img src="https://mdbootstrap.com/img/new/standard/nature/023.jpg" className="img-fluid" />
                                    <Link to="#!">
                                        <div className="mask"></div>
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Post title</h5>
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up the bulk of the
                                        card's content.
                                    </p>
                                    <Link to="#!" className="btn btn-primary">Read</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card">
                                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                    <img src="https://mdbootstrap.com/img/new/standard/nature/111.jpg" className="img-fluid" />
                                    <Link to="#!">
                                        <div className="mask"></div>
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Post title</h5>
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up the bulk of the
                                        card's content.
                                    </p>
                                    <Link to="#!" className="btn btn-primary">Read</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-12 mb-4">
                            <div className="card">
                                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                    <img src="https://mdbootstrap.com/img/new/standard/nature/002.jpg" className="img-fluid" />
                                    <Link to="#!">
                                        <div className="mask"></div>
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Post title</h5>
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up the bulk of the
                                        card's content.
                                    </p>
                                    <Link to="#!" className="btn btn-primary">Read</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card">
                                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                    <img src="https://mdbootstrap.com/img/new/standard/nature/022.jpg" className="img-fluid" />
                                    <Link to="#!">
                                        <div className="mask"></div>
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Post title</h5>
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up the bulk of the
                                        card's content.
                                    </p>
                                    <Link to="#!" className="btn btn-primary">Read</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card">
                                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                    <img src="https://mdbootstrap.com/img/new/standard/nature/035.jpg" className="img-fluid" />
                                    <Link to="#!">
                                        <div className="mask"></div>
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Post title</h5>
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up the bulk of the
                                        card's content.
                                    </p>
                                    <Link to="#!" className="btn btn-primary">Read</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <nav className="my-4" aria-label="...">
                    <ul className="pagination pagination-circle justify-content-center">
                        <li className="page-item">
                            <Link className="page-link" to="#" tabIndex="-1" aria-disabled="true">Previous</Link>
                        </li>
                        <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                        <li className="page-item active" aria-current="page">
                            <Link className="page-link" to="#">2 <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                        <li className="page-item">
                            <Link className="page-link" to="#">Next</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="container">
                <h1>Spring Boot Blog Application</h1>
                <hr />
                <ul>
                    <li><Link to="/posts/new">New Post</Link></li>
                </ul>
                <div className="posts-container">
                    <div className="post" each="post : ${posts}">
                        <h2><Link to="@{'/posts/' + ${post.id}}" text="${post.title}">Title</Link></h2>
                        <h5 text="'Written by ' + ${post.account.firstName}">Account First Name</h5>
                        <h5 text="'Published at ' + ${post.createdAt}">Created At</h5>
                        <h5 text="'Updated at ' + ${post.updatedAt}">Updated At</h5>
                        <p text="${post.body}">body text</p>
                    </div>
                </div>
                <hr />
                <ul authorize="!isAuthenticated()">
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
                <div authorize="isAuthenticated()">
                    <form action="/logout"
                        method="POST">
                        <div>
                            <label>Hi, <span authentication="name">Username</span></label>
                        </div>
                        <button type="submit">Logout</button>
                    </form>
                </div>
            </div>
        </main>
    );
};
export default Home;