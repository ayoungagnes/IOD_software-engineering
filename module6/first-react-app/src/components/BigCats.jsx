import SingleCat from "./SingleCat";
function BigCats() {
  const cats = [
    {
      id: 1,
      name: "Cheetah",
      latinName: "Acinonyx jubatus",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Male_cheetah_facing_left_in_South_Africa.jpg/500px-Male_cheetah_facing_left_in_South_Africa.jpg",
    },
    {
      id: 2,
      name: "Cougar",
      latinName: "Puma concolor",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Mountain_Lion_in_Glacier_National_Park.jpg/500px-Mountain_Lion_in_Glacier_National_Park.jpg",
    },
    {
      id: 3,
      name: "Jaguar",
      latinName: "Panthera onca",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/500px-Standing_jaguar.jpg",
    },
    {
      id: 4,
      name: "Leopard",
      latinName: "Panthera pardus",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/African_leopard_male_%28cropped%29.jpg/500px-African_leopard_male_%28cropped%29.jpg",
    },
    {
      id: 5,
      name: "Lion",
      latinName: "Panthera leo",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg/500px-020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg",
    },
    {
      id: 6,
      name: "Snow leopard",
      latinName: "Panthera uncia",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Irbis4.JPG/500px-Irbis4.JPG",
    },
    {
      id: 7,
      name: "Tiger",
      latinName: "Panthera tigris",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Walking_tiger_female.jpg/500px-Walking_tiger_female.jpg",
    },
  ];
  const BigCatsList = cats.map((cat) => (
    <SingleCat
      key={cat.id}
      name={cat.name}
      latinName={cat.latinName}
      imageUrl={cat.imageUrl}
    ></SingleCat>
  ));
  return (
    <div className="BigCats">
      <ol>{BigCatsList}</ol>
    </div>
  );
}
export default BigCats;
