using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MissionApp.Models
{
    public class GradeCalcModel
    {
        [Range(0, 100, ErrorMessage = "Grade must be between 0 and 100.")]
        public int Assignments { get; set; }
        [Range(0, 100, ErrorMessage = "Grade must be between 0 and 100.")]
        public int Quizzes { get; set; }
        [Range(0, 100, ErrorMessage = "Grade must be between 0 and 100.")]
        public int INTEX { get; set; }
    }
}
