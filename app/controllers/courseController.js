


class CourseController {
    getCourseById(req, res) {
        const course = courses.find(course => course.id === parseInt(req.params.id));

        if (!course) res.status(404).send('Id ko ton tai');

        return res.send(JSON.stringify({
            status: true,
            data: course
        }));

    };

    getAllCourse(req, res) {

        return res.send(JSON.stringify({
            status: true,
            data: courses
        }));
    }
    
    deleteCourse(req, res) {
        var course = courses.find(e => e.id === parseInt(req.params.id));
        console.log(course);

        if (!course) res.send(JSON.stringify({
            status: false,
            notice: "Xoa that bai",
            data: courses
        }));

        // courses = courses.filter(e => {
        //     return e.id != parseInt(req.params.id);
        // });
        const idx = courses.indexOf(course);
        courses.splice(idx, 1);

        return res.send(JSON.stringify({
            status: true,
            notice: "Xoa thanh cong",
            data: courses
        }));
    }
    editCourse(req, res) {
        const course = req.body;

        console.log(course);

        if (!course) res.send(JSON.stringify({
            status: false,
            notice: "Sua that bai"
        }));

        const editCourse = courses.find(e => e.id === course['id']);

        courses[courses.indexOf(editCourse)] = course;

        return res.send(JSON.stringify({
            status: true,
            notice: "Sua thanh cong",
            data: courses
        }));
    };

    addCourse(req, res) {
        console.log(req.body);
        const course = req.body;
        if (!course) return;

        courses.push(course);

        return res.send(JSON.stringify({
            status: true,
            notice: "Ban da them thanh cong",
            data: courses
        }))
    };

}
var courses =
    [
        {
            id: 1,
            name: 'java',
        },
        {
            id: 2,
            name: 'python',
        },
        {
            id: 3,
            name: 'flutter',
        },
        {
            id: 4,
            name: 'ios',
        }
    ]
module.exports = new CourseController;