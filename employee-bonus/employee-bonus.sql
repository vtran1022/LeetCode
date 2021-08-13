# Write your MySQL query statement below
SELECT employee.name, Bonus.bonus
FROM (SELECT empId, name FROM Employee) AS employee
LEFT JOIN (SELECT empId, bonus FROM Bonus) AS bonus
ON (employee.empId = bonus.empId)
WHERE bonus.bonus < 1000 OR bonus.bonus IS NULL;