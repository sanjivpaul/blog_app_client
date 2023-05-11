export default function SinglePost() {
  return (
    <>
      <div className="singlePost">
        <div className="singlePostWrapper">
          <img
            src="https://source.unsplash.com/1600x900/?library"
            alt=""
            className="singlePostImg"
          />
          <h1 className="singlePostTitle">
            Lorem ipsum dolor sit amet.
            <div className="singlePostEdit">
              <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
              <i className="singlePostIcon fa-regular fa-trash-can"></i>
            </div>
          </h1>
          <div className="singlePostInfo">
            <span className="singlePostAuthor">
              Author: <b>Sanjiv</b>
            </span>
            <span className="singlePostDate">1 hour ago</span>
          </div>
          <p className="singlePostDesc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
            voluptate repudiandae odit, excepturi quaerat cum rem molestias
            dolorum architecto voluptatem soluta. Quod voluptates reprehenderit
            ab quam ducimus eligendi? Nemo, aliquid voluptatem vel nam iste
            doloremque praesentium maiores numquam, libero blanditiis fugit!
            Consectetur sed incidunt quos, porro cumque eveniet voluptatum
            dignissimos sint culpa laborum aut enim ea? Doloribus nam, nemo
            natus autem veniam dolorum eum, a vitae ipsa reiciendis quisquam
            officiis saepe iure, cum corrupti! Vitae vero amet facere nostrum
            accusamus sequi blanditiis quis delectus! Nam hic qui ratione
            deleniti laboriosam, obcaecati aspernatur illum quas modi, error
            quidem itaque animi voluptates. Consequuntur pariatur quaerat soluta
            neque, temporibus esse illo id ducimus aliquam ipsam? Itaque quo
            alias illum aspernatur dicta ullam deleniti aliquam iusto unde velit
            non sequi veritatis nulla sed ipsa inventore, consequuntur magni
            doloremque quis iure suscipit? Quos eveniet, odit eaque suscipit
            architecto delectus. Nemo unde eveniet tenetur consequatur
            temporibus!
          </p>
        </div>
      </div>
    </>
  );
}
