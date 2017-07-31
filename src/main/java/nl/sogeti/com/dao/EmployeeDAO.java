package nl.sogeti.com.dao;

import java.util.List;

import javax.annotation.security.RolesAllowed;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import nl.sogeti.com.domain.Employee;
import nl.sogeti.com.domain.Role;

/**
 * The Class EmployeeDAO.
 */
@Stateless
public class EmployeeDAO {

	@PersistenceContext(unitName = "data-unit")
	private EntityManager entityManager;

	public List<Employee> findAllEmployees() {
		List<Employee> listOfEmployees = getEntityManager().createQuery("select e from Employee e", Employee.class).setMaxResults(17).getResultList();
		return listOfEmployees;
	}

	public EntityManager getEntityManager() {
		return entityManager;
	}

	public void setEntityManager(EntityManager entityManager) {
		this.entityManager = entityManager;
	}

}
