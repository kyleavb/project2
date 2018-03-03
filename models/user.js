'use strict';
var bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    first_name: {
      type: DataTypes.STRING,
      validate:{
        len:{
          args:[1,99],
          msg:"Invalid First Name.  Must be between 1 and 99 characters."
        }
      }
    },
    last_name: {
      type: DataTypes.STRING,
      validate:{
        len:{
          args:[1,99],
          msg:"Invalid Last Name.  Must be between 1 and 99 characters."
        }
      }
    },
    userId: {
      type: DataTypes.STRING,
      validate:{
        is:{
          args: ["^[a-z]+$",'i'],
          msg: "User Name must contain Letters only."
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate:{
        is:{
          args:["^[a-z]+$",'i'],
          msg: "Password does not meet requierments"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate:{
        isEmail: true
      }
    }
  }, {
    hooks:{
      beforeCreate: function(pendingUser, options){
        if(pendingUser && pendingUser.password){
          var hash = bcrypt.hashSync(pendingUser.password, 10);
          pendingUser.password = hash;
        };
      }
    }
  });
  user.associate = function(models) {
    // associations can be defined here
    models.user.hasMany(models.deck)
    models.user.hasMany(models.favcard);
  };
  user.prototype.validPassword = function(passwordTyped){
    return bcrypt.compareSync(passwordTyped, this.password)
  };
  user.prototype.toJSON = function(){
    var userData = this.get();
    delete user.password;
    return user;
  }
  return user;
};
