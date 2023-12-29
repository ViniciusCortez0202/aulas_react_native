import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { ActivityIndicator, Button, Card, TextInput } from 'react-native-paper';

export default function Home() {

    const [resultadoMap, setResultadoMap] = useState([])

    const resultado = [
        {
          "backdrop_path": "/5a4JdoFwll5DRtKMe7JLuGQ9yJm.jpg",        
          "id": 695721,
          "original_language": "en",
          "original_title": "The Hunger Games: The Ballad of Songbirds & Snakes",
          "overview": "64 years before he becomes the tyrannical president of Panem, Coriolanus Snow sees a chance for a change in fortunes when he mentors Lucy Gray Baird, the female tribute from District 12.",
          "popularity": 3233.513,
          "poster_path": "/mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg",
          "release_date": "2023-11-15",
          "title": "The Hunger Games: The Ballad of Songbirds & Snakes",
          "video": false,
          "vote_average": 7.223,
          "vote_count": 1039
        },
        {
          "adult": false,
          "backdrop_path": "/jXJxMcVoEuXzym3vFnjqDW4ifo6.jpg",
          "genre_ids": [
            28,
            12,
            14
          ],
          "id": 572802,
          "original_language": "en",
          "original_title": "Aquaman and the Lost Kingdom",
          "overview": "Black Manta, still driven by the need to avenge his father's death and wielding the power of the mythic Black Trident, will stop at nothing to take Aquaman down once and for all. To defeat him, Aquaman must turn to his imprisoned brother Orm, the former King of Atlantis, to forge an unlikely alliance in order to save the world from irreversible destruction.",
          "popularity": 1999.169,
          "poster_path": "/8xV47NDrjdZDpkVcCFqkdHa3T0C.jpg",
          "release_date": "2023-12-20",
          "title": "Aquaman and the Lost Kingdom",
          "video": false,
          "vote_average": 6.5,
          "vote_count": 188
        },
        {
          "adult": false,
          "backdrop_path": "/r9oTasGQofvkQY5vlUXglneF64Z.jpg",
          "genre_ids": [
            28,
            35
          ],
          "id": 1029575,
          "original_language": "en",
          "original_title": "The Family Plan",
          "overview": "Dan Morgan is many things: a devoted husband, a loving father, a celebrated car salesman. He's also a former assassin. And when his past catches up to his present, he's forced to take his unsuspecting family on a road trip unlike any other.",
          "popularity": 1564.216,
          "poster_path": "/jLLtx3nTRSLGPAKl4RoIv1FbEBr.jpg",
          "release_date": "2023-12-14",
          "title": "The Family Plan",
          "video": false,
          "vote_average": 7.436,
          "vote_count": 370
        },
        {
          "adult": false,
          "backdrop_path": "/gg4zZoTggZmpAQ32qIrP5dtnkEZ.jpg",
          "genre_ids": [
            28,
            80
          ],
          "id": 891699,
          "original_language": "en",
          "original_title": "Silent Night",
          "overview": "A tormented father witnesses his young son die when caught in a gang's crossfire on Christmas Eve. While recovering from a wound that costs him his voice, he makes vengeance his life's mission and embarks on a punishing training regimen in order to avenge his son's death.",
          "popularity": 1329.943,
          "poster_path": "/tlcuhdNMKNGEVpGqBZrAaOOf1A6.jpg",
          "release_date": "2023-11-30",
          "title": "Silent Night",
          "video": false,
          "vote_average": 5.824,
          "vote_count": 139
        },
        {
          "adult": false,
          "backdrop_path": "/ktHEdqmMWC1wdfPRMRCTZe2OISL.jpg",
          "genre_ids": [
            27,
            53,
            9648
          ],
          "id": 1071215,
          "original_language": "en",
          "original_title": "Thanksgiving",
          "overview": "After a Black Friday riot ends in tragedy, a mysterious Thanksgiving-inspired killer terrorizes Plymouth, Massachusetts - the birthplace of the holiday. Picking off residents one by one, what begins as random revenge killings are soon revealed to be part of a larger, sinister holiday plan.",
          "popularity": 1126.478,
          "poster_path": "/f5f3TEVst1nHHyqgn7Z3tlwnBIH.jpg",
          "release_date": "2023-11-16",
          "title": "Thanksgiving",
          "video": false,
          "vote_average": 6.648,
          "vote_count": 287
        },
        {
          "adult": false,
          "backdrop_path": "/yOm993lsJyPmBodlYjgpPwBjXP9.jpg",
          "genre_ids": [
            35,
            10751,
            14
          ],
          "id": 787699,
          "original_language": "en",
          "original_title": "Wonka",
          "overview": "Willy Wonka – chock-full of ideas and determined to change the world one delectable bite at a time – is proof that the best things in life begin with a dream, and if you’re lucky enough to meet Willy Wonka, anything is possible.",
          "popularity": 1102.163,
          "poster_path": "/qhb1qOilapbapxWQn9jtRCMwXJF.jpg",
          "release_date": "2023-12-06",
          "title": "Wonka",
          "video": false,
          "vote_average": 7.181,
          "vote_count": 558
        },
        {
          "adult": false,
          "backdrop_path": "/sRLC052ieEzkQs9dEtPMfFxYkej.jpg",
          "genre_ids": [
            878,
            28,
            12
          ],
          "id": 848326,
          "original_language": "en",
          "original_title": "Rebel Moon - Part One: A Child of Fire",
          "overview": "When a peaceful colony on the edge of the galaxy finds itself threatened by the armies of the tyrannical Regent Balisarius, they dispatch Kora, a young woman with a mysterious past, to seek out warriors from neighboring planets to help them take a stand.",
          "popularity": 923.889,
          "poster_path": "/ui4DrH1cKk2vkHshcUcGt2lKxCm.jpg",
          "release_date": "2023-12-15",
          "title": "Rebel Moon - Part One: A Child of Fire",
          "video": false,
          "vote_average": 6.467,
          "vote_count": 494
        },
        {
          "adult": false,
          "backdrop_path": "/9jPoyxjiEYPylUIMI3Ntixf8z3M.jpg",
          "genre_ids": [
            16,
            12,
            35,
            10751
          ],
          "id": 520758,
          "original_language": "en",
          "original_title": "Chicken Run: Dawn of the Nugget",
          "overview": "A band of fearless chickens flock together to save poultry-kind from an unsettling new threat: a nearby farm that's cooking up something suspicious.",
          "popularity": 844.013,
          "poster_path": "/exNtEY8QUuQh9e23wSQjkPxKIU3.jpg",
          "release_date": "2023-12-08",
          "title": "Chicken Run: Dawn of the Nugget",
          "video": false,
          "vote_average": 7.527,
          "vote_count": 273
        },
        {
          "adult": false,
          "backdrop_path": "/1X7vow16X7CnCoexXh4H4F2yDJv.jpg",
          "genre_ids": [
            80,
            18,
            36
          ],
          "id": 466420,
          "original_language": "en",
          "original_title": "Killers of the Flower Moon",
          "overview": "When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one—until the FBI steps in to unravel the mystery.",
          "popularity": 770.179,
          "poster_path": "/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg",
          "release_date": "2023-10-18",
          "title": "Killers of the Flower Moon",
          "video": false,
          "vote_average": 7.559,
          "vote_count": 1588
        },
        {
          "adult": false,
          "backdrop_path": "/zIYROrkHJPYB3VTiW1L9QVgaQO.jpg",
          "genre_ids": [
            28,
            35
          ],
          "id": 897087,
          "original_language": "en",
          "original_title": "Freelance",
          "overview": "An ex-special forces operative takes a job to provide security for a journalist as she interviews a dictator, but a military coup breaks out in the middle of the interview, they are forced to escape into the jungle where they must survive.",
          "popularity": 740.775,
          "poster_path": "/7Bd4EUOqQDKZXA6Od5gkfzRNb0.jpg",
          "release_date": "2023-01-05",
          "title": "Freelance",
          "video": false,
          "vote_average": 6.5,
          "vote_count": 371
        },
        {
          "adult": false,
          "backdrop_path": "/k1KrbaCMACQiq7EA0Yhw3bdzMv7.jpg",
          "genre_ids": [
            16,
            10751,
            10402,
            14,
            35
          ],
          "id": 901362,
          "original_language": "en",
          "original_title": "Trolls Band Together",
          "overview": "When Branch's brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
          "popularity": 647.433,
          "poster_path": "/bkpPTZUdq31UGDovmszsg2CchiI.jpg",
          "release_date": "2023-10-12",
          "title": "Trolls Band Together",
          "video": false,
          "vote_average": 7.146,
          "vote_count": 415
        },
        {
          "adult": false,
          "backdrop_path": "/t5zCBSB5xMDKcDqe91qahCOUYVV.jpg",
          "genre_ids": [
            27,
            9648
          ],
          "id": 507089,
          "original_language": "en",
          "original_title": "Five Nights at Freddy's",
          "overview": "Recently fired and desperate for work, a troubled young man named Mike agrees to take a position as a night security guard at an abandoned theme restaurant: Freddy Fazbear's Pizzeria. But he soon discovers that nothing at Freddy's is what it seems.",
          "popularity": 580.153,
          "poster_path": "/7BpNtNfxuocYEVREzVMO75hso1l.jpg",
          "release_date": "2023-10-25",
          "title": "Five Nights at Freddy's",
          "video": false,
          "vote_average": 7.802,
          "vote_count": 2947
        },
        {
          "adult": false,
          "backdrop_path": "/9PqD3wSIjntyJDBzMNuxuKHwpUD.jpg",
          "genre_ids": [
            16,
            35,
            10751
          ],
          "id": 1075794,
          "original_language": "en",
          "original_title": "Leo",
          "overview": "Jaded 74-year-old lizard Leo has been stuck in the same Florida classroom for decades with his terrarium-mate turtle. When he learns he only has one year left to live, he plans to escape to experience life on the outside but instead gets caught up in the problems of his anxious students — including an impossibly mean substitute teacher.",
          "popularity": 574.856,
          "poster_path": "/pD6sL4vntUOXHmuvJPPZAgvyfd9.jpg",
          "release_date": "2023-11-17",
          "title": "Leo",
          "video": false,
          "vote_average": 7.57,
          "vote_count": 660
        },
        {
          "adult": false,
          "backdrop_path": "/tLsc8SCFO0rMVgVyNm9XtfnyX84.jpg",
          "genre_ids": [
            18,
            9648,
            53,
            878
          ],
          "id": 726209,
          "original_language": "en",
          "original_title": "Leave the World Behind",
          "overview": "A family's getaway to a luxurious rental home takes an ominous turn when a cyberattack knocks out their devices—and two strangers appear at their door.",
          "popularity": 504.757,
          "poster_path": "/29rhl1xopxA7JlGVVsf1UHfYPvN.jpg",
          "release_date": "2023-11-22",
          "title": "Leave the World Behind",
          "video": false,
          "vote_average": 6.534,
          "vote_count": 1127
        },
        {
          "adult": false,
          "backdrop_path": "/ipmUfBf3RxIdATbYI4CcPlnTsWs.jpg",
          "genre_ids": [
            18,
            35,
            53
          ],
          "id": 930564,
          "original_language": "en",
          "original_title": "Saltburn",
          "overview": "Struggling to find his place at Oxford University, student Oliver Quick finds himself drawn into the world of the charming and aristocratic Felix Catton, who invites him to Saltburn, his eccentric family's sprawling estate, for a summer never to be forgotten.",
          "popularity": 375.845,
          "poster_path": "/qjhahNLSZ705B5JP92YMEYPocPz.jpg",
          "release_date": "2023-11-16",
          "title": "Saltburn",
          "video": false,
          "vote_average": 7.224,
          "vote_count": 223
        },
        {
          "adult": false,
          "backdrop_path": "/AucuqDaUW4z1oT5XyL71qwRY2F6.jpg",
          "genre_ids": [
            27,
            53
          ],
          "id": 983507,
          "original_language": "no",
          "original_title": "Meg, deg & Frank",
          "overview": "Christian - a millionaire heir, meets Sigrid - a young student, on a dating app. They hit it off quickly, but there's only one problem: Christian lives with Frank, a man who dresses up and constantly acts like a dog.",
          "popularity": 374.764,
          "poster_path": "/9DPG1gxLwV2oyFdHq3SnISsWbse.jpg",
          "release_date": "2022-06-03",
          "title": "Good Boy",
          "video": false,
          "vote_average": 6.724,
          "vote_count": 114
        },
        {
          "adult": false,
          "backdrop_path": "/feSiISwgEpVzR1v3zv2n2AU4ANJ.jpg",
          "genre_ids": [
            878,
            12,
            28
          ],
          "id": 609681,
          "original_language": "en",
          "original_title": "The Marvels",
          "overview": "Carol Danvers, aka Captain Marvel, has reclaimed her identity from the tyrannical Kree and taken revenge on the Supreme Intelligence. But unintended consequences see Carol shouldering the burden of a destabilized universe. When her duties send her to an anomalous wormhole linked to a Kree revolutionary, her powers become entangled with that of Jersey City super-fan Kamala Khan, aka Ms. Marvel, and Carol’s estranged niece, now S.A.B.E.R. astronaut Captain Monica Rambeau. Together, this unlikely trio must team up and learn to work in concert to save the universe.",
          "popularity": 368.455,
          "poster_path": "/Ag3D9qXjhJ2FUkrlJ0Cv1pgxqYQ.jpg",
          "release_date": "2023-11-08",
          "title": "The Marvels",
          "video": false,
          "vote_average": 6.465,
          "vote_count": 736
        },
        {
          "adult": false,
          "backdrop_path": "/8g9ZdvHX6jszRY71aVtpRUmHQzJ.jpg",
          "genre_ids": [
            18,
            53
          ],
          "id": 958182,
          "original_language": "es",
          "original_title": "Heroico",
          "overview": "Luis, an 18-year-old boy with Indigenous roots, enters the Heroic Military College in hopes of ensuring a better future. There, he encounters a rigid and institutionally violent system designed to turn him into a perfect soldier.",
          "popularity": 368.094,
          "poster_path": "/tRD18JW9iKqmwkQKvzPYDQetRoI.jpg",
          "release_date": "2023-09-21",
          "title": "Heroic",
          "video": false,
          "vote_average": 7.59,
          "vote_count": 67
        },
        {
          "adult": false,
          "backdrop_path": "/dZbLqRjjiiNCpTYzhzL2NMvz4J0.jpg",
          "genre_ids": [
            27,
            53
          ],
          "id": 951491,
          "original_language": "en",
          "original_title": "Saw X",
          "overview": "Between the events of 'Saw' and 'Saw II', a sick and desperate John Kramer travels to Mexico for a risky and experimental medical procedure in hopes of a miracle cure for his cancer, only to discover the entire operation is a scam to defraud the most vulnerable. Armed with a newfound purpose, the infamous serial killer returns to his work, turning the tables on the con artists in his signature visceral way through devious, deranged, and ingenious traps.",
          "popularity": 355.683,
          "poster_path": "/aQPeznSu7XDTrrdCtT5eLiu52Yu.jpg",
          "release_date": "2023-09-26",
          "title": "Saw X",
          "video": false,
          "vote_average": 7.389,
          "vote_count": 1306
        },
        {
          "adult": false,
          "backdrop_path": "/ptz5ETMxDoRRiE69BVuIxJzyTEO.jpg",
          "genre_ids": [
            16,
            35,
            12,
            10751,
            28
          ],
          "id": 940551,
          "original_language": "en",
          "original_title": "Migration",
          "overview": "After a migrating duck family alights on their pond with thrilling tales of far-flung places, the Mallard family embarks on a family road trip, from New England, to New York City, to tropical Jamaica.",
          "popularity": 351.832,
          "poster_path": "/ldfCF9RhR40mppkzmftxapaHeTo.jpg",
          "release_date": "2023-12-06",
          "title": "Migration",
          "video": false,
          "vote_average": 7.359,
          "vote_count": 46
        }
      ];


    useEffect(() => {
        setResultadoMap(resultado.map((elemento) => {

            return {
                id: elemento.id,
                titulo: elemento.title,
                post: elemento.poster_path,
                descricao: elemento.overview
            }
        }))
       
    }, [])



 return (
   <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}        
            data={resultadoMap}
            onEndReachedThreshold={0.4}
            onEndReached={() => {
              
            }}
            renderItem={({item}) => {
                return  <Card style={styles.card}>
                <Card.Cover source={{ uri: "https://image.tmdb.org/t/p/w500/"+item.post }} resizeMode='stretch'/>
                <Card.Title title={item.titulo}/>
                <Card.Content>
                  <Text variant="titleLarge">{item.descricao}</Text>

                </Card.Content>
              </Card>
            }}
        />
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
      marginTop: 32,
      paddingHorizontal: 16,
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center'
    },
    card: {
      marginVertical: 12
    }
  });
  