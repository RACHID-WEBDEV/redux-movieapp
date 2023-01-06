<div className="my-3">
  {films
    ? films.map((data, index) => {
        return (
          <div key={index}>
            {/* <h1 className="text-xl">{data.index + 1}</h1> */}
            <h1 className="text-3xl">{data.title}</h1>
            <p className="text-sm my-3 text-black-100">{data.opening_crawl}</p>

            <div className="my-2 p-5 text-lg">
              {Object.values(data.characters).map((sdata, i) => (
                <p key={i}>{sdata}</p>
              ))}
            </div>
          </div>
        );
        {
          /**
     * 
     * 
     * filter((sdata ==='https://swapi.dev/api')=>(
          
        ))

.filter((url === "https://swapi.dev/api")=> ())

*/
        }
      })
    : ''}
</div>;
