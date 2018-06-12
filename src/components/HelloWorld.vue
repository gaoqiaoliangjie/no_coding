<template>
<div class="hello">
  <legend>Create New Person</legend>
  <div class="form-group">
    <label>Name:</label>
    <input type="text" v-model="newPerson.name" />
  </div>
  <div class="form-group">
    <label>Age:</label>
    <input type="text" v-model="newPerson.age" />
  </div>
  <div class="form-group">
    <label>Sex:</label>
    <el-select v-model="newPerson.sex" placeholder="请选择">
      <el-option v-for="item in sexArray" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select>
  </div>
  <div class="form-group">
    <label></label>
    <el-button type="primary" icon="el-icon-plus" @click="createPerson"></el-button>
  </div>
  <table align="center" border="1">
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Sex</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(person, index) in people" :key="index">
        <td>{{ person.name }}</td>
        <td>{{ person.age }}</td>
        <td>{{ person.sex }}</td>
        <td :class="'text-center'">
          <el-button type="danger" icon="el-icon-delete" @click="deletePerson(index)"></el-button>
        </td>
      </tr>
    </tbody>
  </table>
  <el-table :data="people" style="width: 100% ;text-align:center; margin:auto;">
    <el-table-column prop="name" label="名称" width="120">
    </el-table-column>
    <el-table-column prop="age" label="年龄" width="140">
    </el-table-column>
    <el-table-column prop="sex" label="性别" width="80">
    </el-table-column>
    <!-- <el-table-column
          prop=""
          label="操作">
      </el-table-column> -->
  </el-table>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      sexArray: [{
        value: '男',
        label: '男'
      }, {
        value: '女',
        label: '女'
      }],
      newPerson: {
        name: '',
        age: 0,
        sex: '男'
      },
      people: [{
          name: 'Jack',
          age: 30,
          sex: '男'
        },
        {
          name: 'Bill',
          age: 26,
          sex: '男'
        },
        {
          name: 'Chris',
          age: 36,
          sex: '男'
        }
      ]
    }
  },
  methods: {
    createPerson: function() {
      this.people.push(this.newPerson);
      // 添加完newPerson对象后，重置newPerson对象as
      this.newPerson = {
        name: '',
        age: 0,
        sex: 'Male'
      }
    },
    deletePerson: function(index) {
      // 删一个数组元素
      this.people.splice(index, 1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
