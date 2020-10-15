const mongoose = require('mongoose')

const Cake = mongoose.model('Cake')
const Review = mongoose.model('Review')

module.exports = {
    allCakes: (req,res) => {
        Cake.find()
            .then( cake => res.json(cake))
            .catch(err => res.json(err))
    },
    oneCake: (req,res) => {
       Cake.findOne({_id: req.params.id})
           .populate("reviews")
           .exec((err,cake) => {
               if(err){ res.json(err)}
               else{res.json(cake)}

           })
        // Cake.findOne({_id: req.params.id})
        //     .then( cake => res.json(cake))
        //     .catch( err => res.json(err))
    },
    createCake: (req,res) => {
        console.log(req.body)
        const newCake = new Cake()
        newCake.baker = req.body.baker;
        newCake.imageURL = req.body.imageURL;
        newCake.save()
            .then( newCake => res.redirect('/cakes'))
            .catch( err => res.json(err))
    },
    reviewCake: (req,res) => {
        Cake.findOne({_id: req.params.id}, (err,review) => {
            let newReview = new Review({comment: req.body.data.comment, rating: req.body.data.rating});
            newReview._cake = req.params.id;
            newReview.save(err => {
                if(err){
                    console.log(err)
                    res.json(err)
                } else {
                    Cake.updateOne({_id: req.params.id}, {$push: {"reviews": newReview}}, (err) => {
                        if(err){
                            console.log("trouble: ", err)
                        } else {
                            res.redirect('/cakes')
                        }
                    })
                }
            })
        })
        // Cake.findOne({_id: req.params.id}, cake => {
        //     const newReview = new Review()
        //     newReview.comment = req.body.comment
        //     newReview.rating = req.body.rating
        //     newReview._cake = req.params.id
        //     newReview.save()
        //         .then( Cake.update({_id: req.params.id}, {$push: {'reviews': newReview} }), res.redirect('/cakes'))
        // })
    },
    destroyCake: (req,res) => {
        Cake.deleteOne({_id: req.params.id})
            .then(res.redirect('/cakes'))
            .catch(err => res.json(err))
    }

}
