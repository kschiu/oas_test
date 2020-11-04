/**
 * @oas [get] /vets
 * scope: public
 * description: "Returns all vets from the system that the user has access to"
 * responses:
 *   "200":
 *     description: "A list of vets."
 *     content:
 *       application/json:
 *         schema:
 *           type: "string"
 */

/**
 * @oas [get] /private_vets
 * description: "Returns private vets from the system "
 * responses:
 *   "200":
 *     description: "A list of private vets."
 *     content:
 *       application/json:
 *         schema:
 *           type: "string"
 */

/**
 * @schema vet
 * scope: public
 * required: ['id', 'name']
 * properties:
 *   id:
 *     type: integer
 *   name:
 *     type: string
 *   tag:
 *     type: string
 */
